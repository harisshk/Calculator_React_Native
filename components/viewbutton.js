import React from 'react'
import {Dimensions,SafeAreaView, StyleSheet,Text,TouchableOpacity, View} from 'react-native'

export default function ViewButton(props,{onPress}){
    const {type}=props
    if(type==="ac"){
        return(
            <TouchableOpacity onPress={props.onPress} style={{alignItems:"center",width:"30%",backgroundColor:"#f1f1f1"
            ,borderRadius:20,height:70}}><Text style={{fontSize:40}}>{props.title}</Text></TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity onPress={props.onPress} style={styles.button}><Text style={{fontSize:30}}>{props.title}</Text></TouchableOpacity>
             )
    }
}
const window = Dimensions.get("window")
console.log(window)
const styles =StyleSheet.create({
    button:{
        aspectRatio:1,
        width:window.width/4.3,
        margin:1,
               borderWidth:10,
        borderColor:"#aadaaa",
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50
        
    }
})