import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfileStyles.css';
import Layout from "../components/Layout";

function UserProfilePage() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

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

        fetchUserData();
    }, [id]); // Dependency array ensures this effect runs when id changes

    if (!userData) return <div>Loading...</div>;

    return (
        <Layout>
            <div className='user-container'>
                <h1>{userData.first_name} {userData.last_name}</h1>
                {/* other user details */}
            </div>
        </Layout>
    );
}

export default UserProfilePage;
