import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, LOAD_CHAT_HISTORY_SERVLET } from "../lib/endpoints";

export const getChatHistory = async (other_user_id) => {
    try {

        let userJson = await AsyncStorage.getItem("user");
        let user = JSON.parse(userJson);

        const response = await fetch(
            API_URL + LOAD_CHAT_HISTORY_SERVLET + `?logged_user_id=${user.id}&other_user_id=${other_user_id}`,

            {

                credentials: 'include',

            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('FAILD TO FETCH CHAT HISTORY:', error);
        return null;
    }
};
