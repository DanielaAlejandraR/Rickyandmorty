const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;;

export const validate = (userData) => {
    let errors ={};

    if(!regexEmail.test(userData.email)){
        errors.email = "The email entered is not valid";
    }
    else if(!userData.email){
        errors.email = "Debe ingresar un email";
    }
   else if(userData.email.length > 35){
        errors.email = "El email no debe superar los 35 caracteres"
    }
    
    if(!regexPassword.test(userData.password)){
        errors.password="Password must contain at least 1 number"
    }
    if(userData.password.length < 6 && userData.password > 10 ){
        errors.password= "Password must be between 6 and 10 characters in length"
    }

    return errors;
}

