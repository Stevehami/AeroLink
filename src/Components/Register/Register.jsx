import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "./Register.css";

const schema = z.object({
  names: z.string().min(1, { message: "*required" }),
  email: z.string().email({ message: "*required" }),
  age: z.string()
    .min(2, { message: "*required" })
    .refine((value) => parseInt(value) > 18, { message: "Age must be greater than 18" }), 
  password: z.string().min(6, { message: "Please enter more than 6 characters" }),
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"], 
});

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const handleSubmitForm = async (data) => {
    try {
      console.log("Submitting registration form with data:", data);
      const response = await axios.post("http://localhost:8000/register", data);
      console.log("Registration response:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label>Names:</label>
          <input {...register("names")} />
          <p className="error">{errors?.names?.message}</p>
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
          <p className="error">{errors?.email?.message}</p>
        </div>
        <div>
          <label>Age:</label>
          <input {...register("age")} />
          <p className="error">{errors?.age?.message}</p>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register("password")} />
          <p className="error">{errors?.password?.message}</p>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register("confirm")} />
          <p className="error">{errors?.confirm?.message}</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
