import db from "../config/db.js";

import jwt from 'jsonwebtoken';



export const getUsers = () => {

    return new Promise((resolve , reject) => {

        const query = 'select\n' +
            '\n' +
            '    us.user_id,us.username,rol.name as role ,us.email,us.name , us.lastName, us.numberPhone\n' +
            'from\n' +
            '    users as us\n' +
            '    INNER JOIN roles as rol\n' +
            '        on\n' +
            '            us.role_id = rol.role_id;'
        db.execute(query)
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })

}


export const createUser = (username,password,role_id,email,name,lastname,numberphone,ci) => {
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO users (username,password,role_id,email,name,lastName,numberPhone,ci)value (?,?,?,?,?,?,?,?)'
            db.execute(query, [username,password,role_id,email,name,lastname,numberphone,ci])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}


export const deleteUser = (id) =>{
    return new Promise(
        (resolve, reject) => {
            const query = 'Delete FROM users where user_id = ?;'
            db.execute(query, [id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}


export const signIn = (usr, pwd) => {

    return new Promise((resolve, reject) => {

        const query = 'SELECT username, role_id ,user_id FROM users WHERE username=? AND password=?';

        db.execute(query, [usr, pwd])
            .then(
                (result) =>
            {
                console.log('result : ',result)
                if (result[0].length > 0) {

                    console.log( 'result 0' ,result[0][0])

                    const data = JSON.stringify(result[0][0]);

                    // Genera el token JWT con la información del usuario

                    console.log('data antes del sign ',data)

                    const response  = jwt.sign(data, 'melo')

                    console.log( 'response :' ,response)

                    resolve({token : response})

                } else {
                    // Usuario no encontrado
                    reject({ message :"Usuario no válido" } );
                }
            })
            .catch( (err) => reject(err))

    });

};



// www.mmyapi.com/inventory/addItem - 123b32d81y3db1





