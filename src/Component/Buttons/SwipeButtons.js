import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import {styles} from '../../Styles/styleSheet'
import SwipeButton from 'rn-swipe-button';

const SwipeButtons=(props)=>{
    onSwipeNext=(navigate,screen)=>{
        navigate.navigate(screen)
    }
return (
    <SwipeButton width={'80%'} height={60} title={props.title} titleFontSize={16} railStyles={{
        backgroundColor: props.backColor,
    }} thumbIconBackgroundColor={"#2196F3"} onSwipeSuccess={()=>onSwipeNext(props.navigate,props.screenName)} shouldResetAfterSuccess={true} containerStyles={{backgroundColor:'#fff'}}  />
)
}
export default SwipeButtons