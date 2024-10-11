import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, LOAD_PROFILE_SERVLET } from "../lib/endpoints";

export const getProfile = async () => {
    try {
        const userJson = await AsyncStorage.getItem("user");
        const user = JSON.parse(userJson);

        const response = await fetch(
            API_URL+LOAD_PROFILE_SERVLET+"?id="+user.id,
            {
                credentials: 'include',
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;

    } catch (error) {
        console.error('FAILED TO FETCH USER PROFILE:', error);
        return null;
    }
};
