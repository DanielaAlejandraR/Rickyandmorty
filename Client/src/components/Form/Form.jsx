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
            <h1 className={style.title1} >Welcome!
             <br/>
             <br/>
                Fill your credentials to start</h1> 
            <br/>
            <br/>
            <div className={style.container2}>
            <label className={style.title} htmlFor="email">Email</label>
            <br/>
            
            <input className={style.inputs}
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={userData.email} 
                onChange={handleInputChange}></input>
            
            {errors.email && <p className={style.title2}>{errors.email}</p>}
            <br/>
            <br/>
            
            <label className={style.title} htmlFor="password">Password </label>
            <br/>
            <input className={style.inputs}
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                value={userData.password} 
                onChange={handleInputChange}></input>
          

            {errors.password && <p className={style.title2}>{errors.password}</p>}
            <br/>
            <br/>
            <button className={style.btn} type="submit">Log in</button>
            </div> 
            </form>          
        </div> 
    )
}

export default Form;