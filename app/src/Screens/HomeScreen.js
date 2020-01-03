import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

const LVL1 = 'Easy';
const LVL2 = 'Medium';
const LVL3 = 'Hard';
const {height, width} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.levelGroup}>
            <TouchableOpacity onPress = {() => {
                //callAPI - GetContent(LVL1)
                navigation.navigate('display');
                
            }}>
                <View style={styles.levelButtons}>
                    <Text style={styles.textStyle}>{LVL1}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {
                //callAPI - GetContent(LVL2)
                navigation.navigate('display');
                
            }}>
                <View style={styles.levelButtons}>
                    <Text style={styles.textStyle}>{LVL2}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {
                //callAPI - GetContent(LVL3)
                navigation.navigate('display');
                
            }}>
            <View style={styles.levelButtons}>
                <Text style={styles.textStyle}>{LVL3}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    levelButtons:{
        height: 0.07*height,
        width:0.75*width,
        backgroundColor: '#6200EE',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    levelGroup : {
        height:0.3*height,
        justifyContent: 'space-between',
        top:0.3*height,
        left:0.125*width
    },
    textStyle : {
        fontSize : 0.03*height,
        color:'white',
    }
});

export default HomeScreen;