const users = require("../utils/users"); 

// const login =(req, res) => {
//     let access = false;
//     let message = "Usuario o contraseña erroneo"
//     const {email, password} = req.query;
//     const userFound = users.find ((user) => user.email === email )
//     if(userFound.password !== password){
//         access = false;
//     }
//     else {
//         access = true;
//         message = "ok"
//     }

//     res.status (200).json({ access, message})

// }


const login = (req, res)=> {
    const { email, password } = req.query
    let access = false

    users.forEach((user)=> {
        if(user.email === email && user.password === password) access = true
    })

    return res.status(200).json({ access })

}

module.exports = {
    login
}