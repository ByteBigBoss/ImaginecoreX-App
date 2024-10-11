import { API_URL, LOAD_MOMENTS_SERVLET } from "../lib/endpoints";

export const getMoments = async () => {
    try {
        const response = await fetch(
            API_URL + LOAD_MOMENTS_SERVLET,
    
        {
       
            credentials: 'include',
          
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch moments:', error);
        return null; 
    }
};
