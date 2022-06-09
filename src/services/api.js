import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

export const addUser = async (data) => {
   
    // Use try catch for Error handling and show Error as a output so we use it 
    try {
        return await axios.post(`${usersUrl}/AddUser`, data);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}

export const getUser = async () => {
   
    try {   
        return await axios.get(`${usersUrl}/AllUsers`);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}
 
export const getUserOne = async (id) => {
   
    try {   
        return await axios.get(`${usersUrl}/${id}`);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}
 
export const editUser = async (user, id ) => {
   
    try {   
        return await axios.put(`${usersUrl}/${id}`, user);
    }
    catch (Error) {
        console.log(' Error while calling editUser  Api ', Error);
    } 
}

export const deleteUser = async ( id ) => {
   
    try {   
        return await axios.delete(`${usersUrl}/${id}`);
    }
    catch (Error) {
        console.log(' Error while calling editUser  Api ', Error);
    } 
}
