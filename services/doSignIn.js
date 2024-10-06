import { API_URL, SIGNIN_SERVLET } from "../lib/endpoints";

export const doSignIn = async (mobile, password) => {
    try {


        const response = await fetch(
            API_URL + SIGNIN_SERVLET,

            {
                method: 'POST',
                body: JSON.stringify({
                    mobile: mobile,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
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
