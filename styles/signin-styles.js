import { StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor:"white",
    },
    text1:{
        fontSize:28,
        fontFamily:"Poppins-Bold",
        alignSelf:"center",
        paddingTop:20,
        color:"black"
    },
    text2:{
        fontSize:15,
        paddingTop:6,
        alignSelf:"center",
        textAlign:"center",
        color:"black",
        width:"90%",
        fontFamily:"Poppins-Regular",
    },
    inputLabel:{
        fontSize:14,
        color:"black",
        fontFamily:"Poppins-Bold",
    },
    inputCon:{
        marginTop:30,
        rowGap:30
    },
    inputGroup:{
        rowGap:8
    },

    input:{
        width:"100%",
        height:36,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#000000f",
        padding:10,
        color:"black",
        borderRadius:6
    },
    pressable:{
        width:"100%",
        paddingVertical:12,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        marginTop:26,
        borderStyle:"solid",
        flexDirection:"row",
        gap:10
    },
    pressableText:{
        fontFamily:"Poppins-Bold",
        fontSize:16,
        color:"white"
    },
    coverImg:{
       width:80,
       height:80,
       objectFit:true, 
       alignSelf:"center",
    }
})