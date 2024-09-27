import { StyleSheet } from "react-native";

export const StatusStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:16
  },
  status:{
    fontSize: 64,
    fontFamily:"Montserrat-Bold",
    color:"#000"
  },
  message:{
    fontWeight:"700"
  },
  time:{
    paddingTop:10
  },
  appName:{
    fontSize:24,
    fontWeight:"700",
    paddingTop:20
  },
  servletContainer:{
    gap:20,
    marginTop:20
  },
  servletCard:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingVertical:12,
    borderWidth:1,
    borderStyle:"solid",
    borderBlockColor:"#0000001f",
    borderRadius: 10,
  },
  servletCardTitle:{
    fontWeight:"700"
  },
  servletCardContent:{
    color:"#232323"
  },
})