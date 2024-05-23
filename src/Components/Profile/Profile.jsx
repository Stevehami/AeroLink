import  { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const userEmail = localStorage.getItem('userEmail'); // Retrieve user's email from localStorage

      if (!userEmail) {
        setError('User email not found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/profile/${userEmail}`);
        setUser(response.data.user);
        setTickets(response.data.tickets);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Error fetching profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-container">
      <h1>{user.names}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Flight Number: {ticket.flightNumber}, Booking Date: {ticket.bookingDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
