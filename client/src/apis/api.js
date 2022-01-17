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
          let resp = await axios.get(`${url}/users`);
          console.log(resp);
          return resp.data;
	} catch (err) {
		console.log("Error while calling getUsers api", err);
	}
};

export const setConvo = async (data) => {
     try {
          await axios.post(`${url}/convo`,data)
     }catch(err) {
          console.log('Error while calling setConvo api',err);
     }
}