import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}
export const AdminLogin = user => {
    return axios
        .post('users/admin', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const loginReceptionist = user => {
    return axios
        .post('users/loginReceptionist', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const getAll = user => {
    return axios
        .get('users/allUsers', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const getAllReceptionist = user => {
    return axios
        .get('users/allReceptionist', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = user => {
    return axios
        .get('users/profile', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}