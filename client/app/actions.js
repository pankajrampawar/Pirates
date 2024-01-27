import axios from 'axios'

export const getCrafts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/craft/getCrafts');
        
        console.log(response.data);
        
        return response.data.crafts 
    } catch (error) {
        console.log("Error sending/ receiving the response", error);
    }
};

export const getCraft = async (id) => {
    try {
        const response = await axios.get('http://localhost:8080/craft/getCraft', { params: { craftId: id } })

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