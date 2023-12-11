import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserProfileStyles.css";
import Layout from "../components/Layout";
import "./UserProfileStyles.css";
import Map from "../components/Map";

function UserProfilePage() {
  const location = [40.7128, -74.006];
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userContactInfo, setUserContactInfo] = useState(null);
  const [userExperience, setUserExperience] = useState(null);
  const [employerData, setEmployerData] = useState([]);
  useEffect(() => {
    // Fetch user data based on the id
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${id}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/contactinfo/user_id/${id}`
        );
        setUserContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/experience/user_id/${id}`
        );
        setUserExperience(response.data);

        // Fetch employer data for each experience
        const employersPromises = response.data.map(async (experience) => {
          try {
            const employerResponse = await axios.get(
              `http://localhost:8080/api/employer/${experience.employer_id}`
            );
            return employerResponse.data;
          } catch (error) {
            console.error("Error fetching employer information:", error);
            return null;
          }
        });

        const employersData = await Promise.all(employersPromises);
        setEmployerData(employersData);
      } catch (error) {
        console.error("Error fetching experience information:", error);
      }
    };

    fetchUserData();
    fetchContactInfo();
    fetchExperience();
  }, [id]); // Dependency array ensures this effect runs when id changes

  if (!userData) return <div>Loading...</div>;

  return (
    <Layout>
      {userContactInfo && userData && userExperience && (
        <div className="user-container">
          <div class="profile-container">
            <div class="profile-picture">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="user_headshot"></img>
            </div>
            <div class="cover-photo">
              <img
                src="https://images.pexels.com/photos/11182439/pexels-photo-11182439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="user_cover"></img>
            </div>
          </div>
          <h1 className="name">
            {userData.first_name} {userData.last_name}
          </h1>
          <h1 className="box-wrapper">Practice: {userData.practice_area}</h1>
          <h1 className="headline">
            Bio: {userData.bio ? userData.bio : "---"}
          </h1>
          <h1 className="basic">
            Class of: {userData.class_year ? userData.class_year : "---"}
          </h1>
          <h1 className="basic">
            Business Email: {userData.RE_email ? userData.RE_email : "---"}
          </h1>
          <h1 className="basic">
            Personal Email: {userData.RE_email ? userData.RE_email : "---"}
          </h1>
          <h1 className="basic">
            Gender Identity: {userData.gender ? userData.gender : "---"}
          </h1>
          <h1 className="basic">
            Mobile:{" "}
            {userContactInfo.phone ? userContactInfo.phone : "(347)-555-7777"}
          </h1>
          <h1 className="basic">
            Work: {userData.work ? userData.work : "ext-1001 (347)-888-2222"}
          </h1>
          <h1 className="basic">
            DOB:{" "}
            {userContactInfo.dob
              ? userContactInfo.dob.substring(
                  0,
                  userContactInfo.dob.indexOf("T")
                )
              : "02/05/1985"}
          </h1>
          <h1 className="basic">{userContactInfo.address}</h1>
          <h1 className="basic">Practice Location: City Hall, NYC, NY</h1>
          <h1 className="basic">
            Employed at: Nelson & Murdock: Attorneys at Law
          </h1>
          <div className="card-item">
            {employerData && userExperience && userExperience.length > 0 ? (
              userExperience.map((experience, index) => (
                <div className="result-card">
                  {employerData[index] ? (
                    <div>
                      <p>{employerData[index].name}</p>
                    </div>
                  ) : (
                    <div>
                      <p>No employer information provided</p>
                    </div>
                  )}
                  <p>
                    {experience.position} {experience.description}
                  </p>
                  <p>
                    {experience.start_date.substring(0, 4)} -{" "}
                    {experience.end_date.substring(0, 4)}
                  </p>
                </div>
              ))
            ) : (
              <div className="no-results-message">
                No Experience provided.
                <div className="map">
                  <Map position={location} />
                </div>
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
