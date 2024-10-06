import { API_URL, SIGNUP_SERVLET } from "../lib/endpoints";

export const doSignUp = async (fname, lname, mobile, password, image) => {
    try {

        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('mobile', mobile);
        formData.append('password', password);
        if(image!=null){
            formData.append('avatar', {
                name: 'avatar',
                type: 'image/png',
                uri: image,
            });
        }


        const response = await fetch(
            API_URL+SIGNUP_SERVLET,
    
        {
            method: 'POST',
            body:formData,  
            credentials: 'include',
          
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to process SignUp:', error);
        return null; 
    }
};
