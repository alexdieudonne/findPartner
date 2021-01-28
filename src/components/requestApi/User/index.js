import { APIHelper } from "../apiHelper";


const LIMIT = 10;

/**
 * Sending message a user
 * @param {string} username is message text
 * @param {string} password is message text
 */
export const loginUser = async (username, password) => {
    try {
        let response = await APIHelper.postRequest('/api/users/login', {
            username: username,
            password: password
        });
        console.log(response)
        if (response.data.Status) {
            
        }
    } catch (err) {

    }
}





/**
 * Sending message a user
 * @param {string} age is age of the user
 * @param {string} email is email of the user
 * @param {string} firstname is firstname of the user
 * @param {string} lastname is lastname of the user
 * @param {string} username is username of the user
 * @param {string} password is password of the user
 * 
 */
export const signUser = async (gender, age, email, lastname, firstname,username, password, c_password) => {
    try {
        let response = await APIHelper.postRequest('/api/users/register', {
            gender:gender,
            age:parseInt(age),
            email:email,
            firstname:firstname,
            lastname:lastname,
            username: username,
            password: password,
            c_password:c_password
        });
        console.log(response)
        if (response.data.Status) {
            
        }
    } catch (err) {

    }
}