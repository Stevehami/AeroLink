import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';

function Login() {
    const schema = z.object({
        email: z.string().email({ message: "*required" }),
        password: z.string().min(6, { message: "Please enter more than 6 characters" })
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
    });

    const navigate = useNavigate();

    const handleSubmitForm = async (data) => {
        try {
            console.log('Submitting login form with data:', data);
            const response = await axios.post('http://localhost:8000/login', data);
            console.log('Login response:', response.data);
    
            if (response.status === 200) {
                localStorage.setItem('userId', data.email); // Using email as a unique identifier
                toast.success('Login successful');
                navigate(`/Profile/:userEmail`);
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.error || 'Login failed');
        }
    };
    

    return (
        <>
            <div className="contain">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="form-container">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl underline flex justify-center">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleSubmitForm)}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Email:</label>
                                    <input placeholder="name@company.com" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" id="email" type="email"
                                        {...register("email")}
                                    />
                                    <p className="text-red-500">{errors?.email?.message}</p>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="password">Password:</label>
                                    <input placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" id="password" type="password"
                                        {...register("password")} />
                                    <p className="text-red-500">{errors?.password?.message}</p>
                                </div>
                                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2" type="submit">Submit</button>
                            </form>
                            <Toaster richColors position="top-right" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
