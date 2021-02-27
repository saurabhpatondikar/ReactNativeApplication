import React,{ useState} from 'react'
import {View,Text,TextInput} from "react-native";
import SimpleButton from '../Component/Buttons/ButtonsNormal'
import SwipeButton from './Buttons/SwipeButtons'
import {connect} from 'react-redux'
import {storeAction} from "../Action/storeAction";
import {screensName} from '../Constants/screenName'
import {Colors} from '../Constants/colors'
import {buttonText} from '../Constants/textButtons'
import {styles} from '../Styles/styleSheet'

const Home=(props)=>{
    const [name,setName]=useState('')
    const [nameEnter,setNameEnter]=useState('')
    
    
    onClickButton=()=>{
        props.navigation.navigate("About")
    }
   const handleTextChange=(text)=>{
          props.dispatch(storeAction({name:text}))
          setNameEnter(text)
      }
      
    return(
        <View style={[{padding:10,flex:1,backgroundColor:Colors.backGrouColor}]}>
            
               <View style={[{flex:0.5,justifyContent: 'flex-start'}]}>
                   <View style={{alignSelf:'flex-end'}}><Text style={[styles.textPress]}>{props.addition?props.addition.name:''}</Text></View>
                   <TextInput value={nameEnter} style={[styles.textInputField]} placeholder={buttonText.placText} onChangeText={(text)=>handleTextChange(text)} onBlur={()=>setNameEnter('')}/>
               </View>
               <View style={[{flex:0.5,padding:5},styles.doCenter]}>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.Transparent} textColor={Colors.DarkColor} text={buttonText.pressText}/>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.greyColor} textColor={Colors.DarkColor} text={buttonText.pressText}/>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.pressText}/>
                   <SwipeButton title={buttonText.slideText} backColor={Colors.Transparent} navigate={props.navigation} screenName={screensName.AboutScre}/>
               </View>
           </View>
    )
}

function mapStateToProps(state){
const {addition}= state
    return{
    addition:addition
    }
}
export default connect(mapStateToProps)(Home)