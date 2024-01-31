import axios from 'axios'
import Cookies from 'js-cookie';

export const login = async (username, password) => {
    try {
        const user = {
            username: username,
            password: password,
        }

        const response = await axios.post("http://localhost:8080/user/login", 
            { user },
            {
                withCredentials: true,
            }
        );
       
        // Check if the response contains cookies
        if (response.headers['set-cookie']) {
           // Extract the cookies from the response headers
           const cookiesFromResponse = response.headers['set-cookie'];
           // Set the cookies on the client side
           cookiesFromResponse.forEach(cookie => {
               const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
               Cookies.set(cookieName, cookieValue, { path: '/', secure: true, sameSite: 'Strict' });
           });
        }

        console.log(response);
        
        return true;
    } catch (error) {
        console.log("error logging in", error);
        alert(error)
        return false;
    }
}

export const getCrafts = async () => {
    try {

        const response = await axios.get('http://localhost:8080/craft/getCrafts', {
            withCredentials: true,
        });
        
        console.log(response.data);
        
        return response.data.crafts 
    } catch (error) {
        console.log("Error sending/ receiving the response", error);
    }
};

export const getCraft = async (id) => {
    try {
        const response = await axios.get('http://localhost:8080/craft/getCraft', 
            { 
                params: { craftId: id } 
            }
        )

        return response.data.craft;
    } catch (error) {
        console.log("Error sending/ receiving the reply", error);
    }
}

export const getReplyForCraft = async (id) => {
    try {
        const response = await axios.get('http://localhost:8080/response/getResponses', { params: { craftId: id } })
        
        return response.data.responses
    } catch (error) {
        console.log("Error sending/ receiving the reply", error);
    }
}