import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, SEND_CHAT_SERVLET} from "../lib/endpoints";

export const doSendChat = async (other_user_id, message) => {
    try {

        let userJson = await AsyncStorage.getItem("user");
        let user = JSON.parse(userJson);

        const response = await fetch(
            API_URL + SEND_CHAT_SERVLET + `?logged_user_id=${user.id}&other_user_id=${other_user_id}&message=${message}`,

            {

                credentials: 'include',

            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('FAILD TO LOAD USER CHAT:', error);
        return null;
    }
};
