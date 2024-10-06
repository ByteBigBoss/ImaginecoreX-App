import { StyleSheet } from "react-native";


export const Globals = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#0000001f",
    },
    borderBottom:{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "#0000001f",
    },
    borderError: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "red"
    },
    pt_100: {
        paddingTop: 100
    },
    absolute: {
        position: "absolute",
    },
    relative:{
        position: "relative",
        alignSelf:""
    },
    uppercase:{
        textTransform: "uppercase"
    },
    center:{
        justifyContent: "center",
        alignItems: "center",
    },
    fontPoppinsBold:{
        fontFamily: "Poppins-Bold",
    },
    fontPoppinsRegular:{
        fontFamily: "Poppins-Regular",
    },
    fontPoppinsSemiBold:{
        fontFamily: "Poppins-SemiBold",
    },
    fontPoppinsMedium:{
        fontFamily: "Poppins-Medium",
    },
    flexRow:{
        flexDirection:"row"
    },
    flexCol:{
        flexDirection:"column"
    },
    spaceBetween:{
        justifyContent:"space-between"
    },
    justifyCenter:{
        justifyContent:"center",
    },
    alignCenter:{
        alignItems: "center",
    },
    textCenter:{
        textAlign:"center"
    },
    justifyEnd:{
        justifyContent:"flex-end",
    },
    justifyStart:{
        justifyContent:"flex-start",
    },
})

export const GlobalDynamics = {
    top: (number) => ({
        top: number, // dynamic value
    }),
    left: (number) => ({
        left: number, 
    }),
    right: (number) => ({
        right: number, 
    }),
    bottom: (number) => ({
        bottom: number, 
    }),
    width: (number) => ({
        width: number, 
    }),
    height: (number) => ({
        height: number, 
    }),
    paddingTop: (number) => ({
        paddingTop: number, 
    }),
    paddingBottom: (number) => ({
        paddingBottom: number, 
    }),
    paddingLeft: (number) => ({
        paddingLeft: number, 
    }),
    paddingRight: (number) => ({
        paddingRight: number, 
    }),
    paddingHorizontal: (number) => ({
        paddingHorizontal: number, 
    }),
    paddingVertical: (number) => ({
        paddingVertical: number, 
    }),
    marginTop: (number) => ({
        marginTop: number, 
    }),
    marginBottom: (number) => ({
        marginBottom: number, 
    }),
    marginLeft: (number) => ({
        marginLeft: number, 
    }),
    marginRight: (number) => ({
        marginRight: number, 
    }),
    marginHorizontal: (number) => ({
        marginHorizontal: number, 
    }),
    marginVertical: (number) => ({
        marginVertical: number, 
    }),
    borderRadius: (number) => ({
        borderRadius: number, 
    }),
    borderRadiusBottom: (radius) => ({
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
    }),
    borderRadiusTop: (radius) => ({
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
    }),
    flex: (number) => ({
        flex: number, 
    }),
    backgroundColor: (color) => ({
        backgroundColor: color, 
    }),
    color: (color) => ({
        color: color, 
    }),
    alignSelf: (align) => ({
        alignSelf: align, 
    }),
    fontSize: (number) => ({
        fontSize: number, 
    }),
    fontWeight: (weight) => ({
        fontWeight: weight, 
    }),
    border: (border) => ({
        borderWidth: border.width,
        borderStyle: border.style,
        borderColor: border.color,
    }),
    justifyContent: (align) => ({
        justifyContent: align, 
    }),
    alignItems: (align) => ({
        alignItems: align, 
    }),
    gap: (number) => ({
        gap: number, 
    }),
    rowGap: (number) => ({
        rowGap: number, 
    }),
    columnGap: (number) => ({
        columnGap: number, 
    }),
    dropShadow: ({
        color = 'rgba(0, 0, 0, 0.3)', // default shadow color
        strength = 5, // default strength of the shadow
        radius = 5, // default blur radius
        position = 'bottom', // shadow position ('top' or 'bottom')
        drop = 2, // distance of the shadow drop
    }) => {
        const shadowOffsetY = position === 'bottom' ? drop : -drop; // adjust shadow position

        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: shadowOffsetY, // controls the drop of the shadow
            },
            shadowOpacity: strength / 10, // convert strength to a value between 0 and 1
            shadowRadius: radius,
            elevation: strength, // for Android
        };
    },
    zIndex: (value) => ({
        zIndex: value,
    }),
    opacity:(number)=>({
        opacity: number
   }),
}