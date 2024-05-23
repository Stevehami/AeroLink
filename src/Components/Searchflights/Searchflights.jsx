import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Searchflights.css'; // Import CSS file for search flights styles
import flightsData from '../../data/flights.json'; // Adjust the path based on your project structure

const SearchFlights = () => {
    
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [travelClass, setTravelClass] = useState('economy');
    const [flights, setFlights] = useState([]); // State to store filtered flight data
    const [loading, setLoading] = useState(false); // State to manage loading state
    const [noFlights, setNoFlights] = useState(false); // State to handle no flights available message

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!departure || !arrival || !departureDate) {
            alert("Please enter departure city, arrival city, and departure date.");
            return;
        }
        setLoading(true);
        setNoFlights(false);
        
        // Simulate fetching data
        setTimeout(() => {
            const filteredFlights = flightsData.filter(flight => 
                flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
                flight.arrival.toLowerCase().includes(arrival.toLowerCase()) &&
                flight.departureDate === departureDate
            );
            setFlights(filteredFlights);
            setNoFlights(filteredFlights.length === 0);
            setLoading(false);
        }, 500); // Simulate a network delay with 500ms
        
    };

    return (
        <div className="container mx-auto my-8 p-4">
            <h2 className="relative text-2xl font-bold mb-4 text-center z-20">Search Flights</h2>
            <form className="relative max-w-3xl mx-auto bg-white p-6 rounded shadow-md z-20" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="departure" className="block text-sm font-bold mb-2">Departure City:</label>
                        <input type="text" id="departure" name="departure" className="w-full p-2 border border-gray-300 rounded" value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Enter departure city" />
                    </div>
                    <div>
                        <label htmlFor="arrival" className="block text-sm font-bold mb-2">Arrival City:</label>
                        <input type="text" id="arrival" name="arrival" className="w-full p-2 border border-gray-300 rounded" value={arrival} onChange={(e) => setArrival(e.target.value)} placeholder="Enter arrival city" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="departureDate" className="block text-sm font-bold mb-2">Departure Date:</label>
                        <input type="date" id="departureDate" name="departureDate" className="w-full p-2 border border-gray-300 rounded" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="returnDate" className="block text-sm font-bold mb-2">Return Date:</label>
                        <input type="date" id="returnDate" name="returnDate" className="w-full p-2 border border-gray-300 rounded" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="passengers" className="block text-sm font-bold mb-2">Passengers:</label>
                        <input type="number" id="passengers" name="passengers" className="w-full p-2 border border-gray-300 rounded" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" />
                    </div>
                    <div>
                        <label htmlFor="travelClass" className="block text-sm font-bold mb-2">Class:</label>
                        <select id="travelClass" name="travelClass" className="w-full p-2 border border-gray-300 rounded" value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                            <option value="economy">Economy</option>
                            <option value="premium-economy">Premium Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    {loading ? 'Searching...' : 'Search Flights'}
                </button>
            </form>
            {flights.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Available Flights</h3>
                    <ul className="flight-list">
                        {flights.map((flight, index) => (
                            <li key={index} className="flight-item">
                                <div className="flight-detail"><strong>Flight Number:</strong> {flight.flightNumber}</div>
                                <div className="flight-detail"><strong>Departure:</strong> {flight.departure}</div>
                                <div className="flight-detail"><strong>Arrival:</strong> {flight.arrival}</div>
                                <div className="flight-detail"><strong>Departure Time:</strong> {flight.departureTime}</div>
                                <div className="flight-detail"><strong>Arrival Time:</strong> {flight.arrivalTime}</div>
                                <div className="flight-detail"><strong>Price:</strong> ${flight.price}</div>
                                <Link to={`/book/${flight.flightNumber}`} className="book-now">Book Now</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {noFlights && (
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold mb-4">No Flights Available</h3>
        
                </div>
            )}
        </div>
    );
};

export default SearchFlights;
