import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, LOAD_CHAT_DATA_SERVLET } from "../lib/endpoints";

export const getChatData = async () => {
    try {

        let userJson = await AsyncStorage.getItem("user");
        let user = JSON.parse(userJson);

        const response = await fetch(
            API_URL + LOAD_CHAT_DATA_SERVLET + "?id="+user.id,

            {

                credentials: 'include',

            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('FAILD TO FETCH CHAT LIST:', error);
        return null;
    }
};
