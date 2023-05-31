import axios from "axios"


const getUsers = () => { 
    
    return axios.get("https://64760d0be607ba4797dd36a8.mockapi.io/api/v1/users")
};

const updateUser  = (user) => { 
    
    return axios.put(`https://64760d0be607ba4797dd36a8.mockapi.io/api/v1/users/${user.id}`,user)
};

const createUser  = (user) => { 
    
    return axios.post(`https://64760d0be607ba4797dd36a8.mockapi.io/api/v1/users`,user)
};

const deleteUser  = (id) => { 
    
    return axios.put(`https://64760d0be607ba4797dd36a8.mockapi.io/api/v1/users/${id}`)
};




export {getUsers , updateUser , createUser , deleteUser};