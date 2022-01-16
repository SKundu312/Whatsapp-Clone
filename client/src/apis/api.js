import axios from 'axios';

const url = "http://localhost:5000";

export const addUser = async (data) => {
     try {
          return await axios.post(`${url}/add`,data)
     }catch(err) {
          console.log('Error while calling addUser api',err);
     }
}

export const getUsers = async() => {
	try {
		return await axios.get(`${url}/users`);
	} catch (err) {
		console.log("Error while calling getUsers api", err);
	}
};