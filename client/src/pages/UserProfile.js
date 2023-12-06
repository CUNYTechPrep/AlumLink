import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfileStyles.css';
import Layout from "../components/Layout";

function UserProfilePage() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userContactInfo, setUserContactInfo] = useState(null);
    const [userExperience, setUserExperience] = useState(null);
    const [employerData, setEmployerData] = useState([]);
    useEffect(() => {
        // Fetch user data based on the id
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchContactInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/contactinfo/user_id/${id}`);
                setUserContactInfo(response.data);
            } catch (error) {
                console.error('Error fetching contact information:', error);
            }
        };

        // const fetchExperience = async () => {
        //     try {
        //         const response = await axios.get(`http://localhost:8080/api/experience/user_id/${id}`);
        //         setUserExperience(response.data);
        //         console.log(response.data);
        //     } catch (error) {
        //         console.error('Error fetching contact information:', error);
        //     }
        // }
        const fetchExperience = async () => {
            try {
              const response = await axios.get(`http://localhost:8080/api/experience/user_id/${id}`);
              setUserExperience(response.data);
              
              // Fetch employer data for each experience
              const employersPromises = response.data.map(async (experience) => {
                try {
                   const employerResponse = await axios.get(`http://localhost:8080/api/employer/${experience.employer_id}`);
                   return employerResponse.data;
                } catch (error) {
                  console.error('Error fetching employer information:', error);
                  return null;
                }
              });
      
              const employersData = await Promise.all(employersPromises);
              setEmployerData(employersData);
            } catch (error) {
              console.error('Error fetching experience information:', error);
            }
          };

        fetchUserData();
        fetchContactInfo();
        fetchExperience();
    }, [id]); // Dependency array ensures this effect runs when id changes
    
    if (!userData) return <div>Loading...</div>;

    return (
        <Layout>
            {userContactInfo && userData && userExperience &&(
                <div className='user-container'>
                    <h1>{userData.first_name} {userData.last_name}</h1>
                    <h1 className='box-wrapper'>Class of {userData.class_year}</h1>
                    {/* other user details */}
                    <h1>Business Email: {userData.RE_email? userData.RE_email: '---'}</h1>
                    <h1>Home: {userData.home? userData.home: '---'}</h1>
                    <h1>Mobile: {userContactInfo.phone? userContactInfo.phone: '---'}</h1>
                    <h1>Work: {userData.work? userData.work: '---'}</h1>
                    <h1>DOB: {userContactInfo.dob ? userContactInfo.dob.substring(0, userContactInfo.dob.indexOf('T')) : '---'}</h1>
                    <h1>{userContactInfo.address}</h1>
                    <h1>Spouse: '---'</h1>
                    <h1>Employment</h1>
                    <div className='card-item'>
                        {employerData && userExperience && userExperience.length > 0 ? (
                            userExperience.map((experience, index) => (
                                <div className="result-card">
                                    {employerData[index] ? (
                                        <div>
                                            <p>{employerData[index].name}</p>
                                        </div>
                                    ) : (
                                        <div><p>No employer information provided</p></div>
                                    )}
                                    <p>{experience.position} {experience.description}</p>
                                    <p>{experience.start_date.substring(0, 4)} - {experience.end_date.substring(0, 4)}</p>
                                </div>
                            ))
                            ) : (
                            <div className="no-results-message">
                                No Experience provided.
                            </div>
                            )}
                    </div>
                    <br></br>
                </div>
            )}
        </Layout>
    );
}

export default UserProfilePage;