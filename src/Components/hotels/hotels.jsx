import { useState } from 'react';
import './hotels.css';// Import CSS file for search flights styles

const Hotels = () => {
    const [destination, setDestination] = useState('');
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [travelClass, setTravelClass] = useState('economy');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission, e.g., making an API call to search for flights
        console.log({
            destination,
            checkinDate,
            checkoutDate,
            passengers,
            travelClass
        });
    };

    return (
       
        <div className="container mx-auto my-8 p-4">
         
           

            <h2 className=" relative text-2xl font-bold mb-4 text-center z-20">Search Flights</h2>
            <form className="relative max-w-3xl mx-auto bg-white p-6 rounded shadow-md z-20" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="departure" className="block text-sm font-bold mb-2">Destination City:</label>
                        <input type="text" id="departure" name="departure" className="w-full p-2 border border-gray-300 rounded" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter city" />
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="departureDate" className="block text-sm font-bold mb-2">Checkin Date:</label>
                        <input type="date" id="checkinDate" name="checkinDate" className="w-full p-2 border border-gray-300 rounded" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="checkoutDate" className="block text-sm font-bold mb-2">Checkout Date:</label>
                        <input type="date" id="checkoutDate" name="checkoutDate" className="w-full p-2 border border-gray-300 rounded" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
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
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Search Hotels</button>
            </form>
            
        </div>
    );
};

export default Hotels;
