import React from 'react';
import {Text,View,StyleSheet,Dimensions,Animated} from 'react-native';
const { height, width } = Dimensions.get('window');

const progressBar = ({data}) => {
    const {index,length} = data;
    // console.log(data);
    const percent = Math.floor((index+1)/length*100);
    return (
        
        <View style={styles.progress}>
            <Text style={styles.text}> {percent}% </Text>
            <Animated.View style={{...styles.percentage , width:percent*0.95*width/100 }} />
        </View>
    );
}

const styles =StyleSheet.create({
    percentage:{
        marginLeft:0.01*width,
         backgroundColor:'#6200EE',
         height:0.0025*height,
        //  borderWidth:1,
         borderRadius:100,
         position:'absolute',
         top:0,
         left:0
    },
    progress:{
        marginLeft:0.01*width,
        borderRadius:100,
        width:0.95*width,
        height:0.0025*height,
        position:'absolute',
        alignItems:'center',
        top:0,
        left:0,
        backgroundColor:'#e9dff0'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#542675',
        textAlignVertical:'center',
        top:-0.07*height
    }
})
export default progressBar;