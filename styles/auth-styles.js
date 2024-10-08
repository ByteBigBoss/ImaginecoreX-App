import { StyleSheet } from "react-native";

export const AuthStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    image:{
        marginTop:30,
        width:100,
        height:100,
        objectFit:true, 
        alignSelf:"center",
        borderRadius:12,
    },
    imagePreview:{
        marginTop:30,
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        backgroundColor:"white",
        alignSelf:"center"
    },
    title:{
        fontFamily:"Poppins-Bold",
        fontSize:24,
        textAlign:"center",
        marginTop:20,
        paddingTop:30
    },
    subtitle:{
        textAlign:"center",
    },
    termsText:{
        fontSize:12,
        opacity:0.5,
        textAlign:"center",
        marginTop:40,
        width:"80%",
        alignSelf:"center",
        paddingBottom:30
    },
    inputLabel:{
        fontSize:14,
        color:"black",
        fontFamily:"Poppins-Bold",
    },
    inputCon:{
        marginTop:40,
        rowGap:30
    },
    inputGroup:{
        rowGap:8
    },

    input:{
        width:"100%",
        height:36,
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
    secondaryPressable:{
        marginTop:20
    },
    secondaryPressableText:{
        textAlign:"center"
    },
    pressableText:{
        fontFamily:"Poppins-Bold",
        fontSize:16,
        color:"white"
    },
    inputLine:{
        flexDirection:"row",
        width:"100%",
        columnGap:20
    },
    flex1:{
        flex:1,
    },
    px_16:{
        paddingHorizontal:16
    },
    justifyCenter:{
        justifyContent:"center",
    },
    gradient:{
        
        justifyContent:"center",
    },
})