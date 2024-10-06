import { API_URL, GETLETTERS_SERVLET, } from "../lib/endpoints";

export const getLetters = async (mobile) => {
    try {
        const response = await fetch(
            API_URL + GETLETTERS_SERVLET + "?mobile=" + mobile,

            {

                credentials: 'include',

            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch system status:', error);
        return null;
    }
};
