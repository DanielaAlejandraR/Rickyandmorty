import {useState} from "react";
import {validate} from "./validation";
import style from './Form.module.css'

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
            <form onSubmit={handleSubmit} className={style.container}>
            <h1 >Welcome!
             <br/>
             <br/>
                Fill your credentials to start</h1> 
            <br/>
            <br/>

            <label className={style.title} htmlFor="email">Email</label>
            <br/>
            <br/>

            <input className={style.inputs}
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={userData.email} 
                onChange={handleInputChange}></input>

            {errors.email && <p>{errors.email}</p>}
            <br/>
            <br/>
            <label className={style.title} htmlFor="password">Password </label>
            <br/>
            <br/>
            <input className={style.inputs}
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                value={userData.password} 
                onChange={handleInputChange}></input>

            {errors.password && <p>{errors.password}</p>}
            <br/>
            <br/>
            <br/>
            <button className={style.btn} type="submit">Log in</button>
            </form>          
        </div> 
    )
}

export default Form;