import React from 'react';
import {View} from "react-native";
import {connect} from 'react-redux'
import ButtonNormal from './Buttons/ButtonsNormal'
import {screensName} from '../Constants/screenName'
import HeaderLeft from '../Component/HeadingComp/HeadingLeft'
import {Colors} from '../Constants/colors'
import {buttonText} from '../Constants/textButtons'
import {styles} from '../Styles/styleSheet'

const LastScreen=(props)=>{
    return(
        <View style={{padding:10,flex:1,backgroundColor:Colors.backGrouColor}}>
            <View style={[{flex:0.5},styles.doLeft]}>
            <HeaderLeft name={props.addition?props.addition.name:''}/>
            </View>
                <View style={[{flex:0.5},styles.doCenter]}>
                <ButtonNormal navigate={props.navigation} screenName={screensName.HomeScreen} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.homeText}/>
                <ButtonNormal navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.prevText}/>
                </View>
            </View>
    )
}
function mapStateToProps(state){
    const{addition}=state
    return{
      addition:addition
    };
}
export default connect(mapStateToProps)(LastScreen)