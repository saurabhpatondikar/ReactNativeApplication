import React from 'react'
import {Text,View} from 'react-native'
import {styles} from '../../Styles/styleSheet'

const HeaderLeft=(props)=>{
    return(
       <View><Text style={[styles.textPress]}>{props.name}</Text></View>
    )
}
export default HeaderLeft