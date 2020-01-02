import React from 'react';
import {View,Text} from 'react-native';

const AnimatedCharacter =({data}) => {
    return <Text style = {{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }}>{data}</Text>;
}

export default AnimatedCharacter;