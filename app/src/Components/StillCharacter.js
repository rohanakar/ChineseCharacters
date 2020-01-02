import React from 'react';
import {View,Text} from 'react-native';

const StillCharacter = ({data}) => {
    return <Text style = {{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }}>{data}</Text>;
}

export default StillCharacter;