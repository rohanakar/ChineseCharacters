import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import ProgressBar from '../Components/ProgressBar';

const {height, width} = Dimensions.get('window');
const DisplayScreen = () => {
    
    const [state,setState] = useState({
        dicitonaryMeaning : "",
        animatedImage : '',
        filename : 'abc',
        charactersDisplayed : 0,
        totalCharacters : 400,
        displayComponent : 'stillCharacter'
    });

    return (
        <View>
            {/* Left Button */}
            <View style={styles.contenet}> 
                <TouchableOpacity>
                    <View style = {styles.button}>
                    </View>
                </TouchableOpacity>
                {/* square containg still/animated component */}
                {/* Right Button */}
                <TouchableOpacity>
                    <View style = {styles.button}>
                    </View>
                </TouchableOpacity>
            </View>           
           

           {/* rectangle containg pingyinaudio component */}
           <ProgressBar />
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        width: 0.05*width,
        backgroundColor: '#6200EE',
        height:0.5*height,
        borderRadius:1,
        marginHorizontal:0.07*width,
        marginVertical: 0.07*height
    },
    contenet:{
        width:width,
        flexDirection:'row',
        justifyContent: 'space-between'
    }

});

export default DisplayScreen;