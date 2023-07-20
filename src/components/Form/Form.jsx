import {useState} from "react";
import {validate} from "./validation";

const Form = ({ login}) => {
    const[errors, setErrors] = useState ({
        email:"",
        password: "",  
    });

    const[userData, setUserData] = useState({
        email:"",
        password: "",  
    });

    const handleSubmit = (evento) => {
        evento.preventDefault();
        login(userData);
    }
    const handleInputChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validate(
            {...userData, 
            [evento.target.name] : evento.target.value
            }))
    }

    return(
        <div>  
            <form onSubmit={handleSubmit}>
            <h1>Welcome! Fill your credentials to start</h1>

            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={userData.email} 
                onChange={handleInputChange}></input>

            {errors.email && <p>{errors.email}</p>}
            <br/>

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                value={userData.password} 
                onChange={handleInputChange}></input>

            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button type="submit">Log in</button>
            </form>          
        </div> 
    )
}

export default Form;