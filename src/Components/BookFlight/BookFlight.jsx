import { useNavigate, useParams } from 'react-router-dom';
import flightsData from '../../data/flights.json'; // Adjust the path based on your project structure

const BookFlight = () => {
    const { flightNumber } = useParams();
    const navigate = useNavigate();

    // Find the flight details based on the flightNumber
    const flight = flightsData.find(flight => flight.flightNumber === flightNumber);

    const handlePayment = () => {
        if (flight) {
            // Redirect to the profile page with the flightNumber as a parameter
            navigate(`/profile/${flight.flightNumber}`);
        } else {
            console.error(`Flight with number ${flightNumber} not found`);
        }
    };

    return (
        <div className="container">
            <h2>Book Flight {flightNumber}</h2>
            {/* Display flight details */}
            {flight ? (
                <div>
                    <p><strong>Airline:</strong> {flight.airline}</p>
                    <p><strong>Departure:</strong> {flight.departure}</p>
                    <p><strong>Arrival:</strong> {flight.arrival}</p>
                    <p><strong>Departure Date:</strong> {flight.departureDate}</p>
                    <p><strong>Departure Time:</strong> {flight.departureTime}</p>
                    <p><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
                    <p><strong>Price:</strong> ${flight.price}</p>
                </div>
            ) : (
                <p>Flight not found</p>
            )}
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default BookFlight;
