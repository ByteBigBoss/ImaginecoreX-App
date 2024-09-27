import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getSystemStatus } from "../services/getSystemStatus";
import { StatusStyles } from "../styles/status-styles";

const StatusScreen = () => {

    const [status, setStatus] = useState();

    const handleReq = async () => {
        const json = await getSystemStatus();
        setStatus(json);
    }

    useEffect(() => {
        handleReq();
        const interval = setInterval(() => {
            handleReq();
        }, 300000); // Adjust interval time as needed

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);


    if (!status) {
        return <View style={StatusStyles.container}><Text>SERVER NOT CONNECTED</Text></View>
    }

    return (
        <View style={StatusStyles.container}>
            <Text style={StatusStyles.status}>{status.status}</Text>
            <Text style={StatusStyles.message}>{status.msg}</Text>
            <Text style={StatusStyles.time}>STATUS UPDATED AT: {status.time}</Text>
            <Text style={StatusStyles.appName}>{status.appName}</Text>
            <View style={StatusStyles.servletContainer}>
            {status?.servlets.map((item, key) => {
                const [left, right] = item.split("#");
                return (
                    <View style={StatusStyles.servletCard} key={key}>
                        <Text style={StatusStyles.servletCardTitle}>{left}</Text>
                        <Text style={StatusStyles.servletCardContent}>{right}</Text>
                    </View>
                )
            })}
            </View>
        </View>
    )
};

export default StatusScreen;