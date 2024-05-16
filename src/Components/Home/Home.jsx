import { useEffect, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import Typed from "typed.js";

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        // Initialize Typed.js
        const typedInstance = new Typed(el.current, {
            strings: [
                "<i>Millions of cheap flights...</i>",
                "One simple search...",
            ],
            typeSpeed: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        });

        // Clean up Typed instance
        return () => {
            typedInstance.destroy();
        };
    }, []);

    return (
        <>
            <section className='relative w-full h-screen overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    src="https://ik.imagekit.io/Steve2003/Aeroplane%20mp4.mp4?updatedAt=1715879271408"
                    type="video/mp4"
                >
                    <p className="text-white">Hello</p>
                </video>

                <div className='relative z-20 flex flex-col justify-center items-center  h-full gap-4 px-10
                '>
                    <h1 className="text-white text-6xl">AEROLINK</h1>
                    <div className="text-white text-5xl mb-4 " ref={el}></div>
                    <h1 className="text-white text-4xl font-bold">Search your holiday</h1>
                    <label htmlFor='city' className="block text-white mb-2">Search your destination</label>
                    <div className='flex justify-center items-center'>
                        <input
                            type='text'
                            placeholder='Enter Search Destination...'
                            className="p-2 rounded border border-gray-300 w-80"
                        />
                        <CiLocationOn className='flex text-white' size={24} />
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
