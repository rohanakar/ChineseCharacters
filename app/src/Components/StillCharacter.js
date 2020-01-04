import React from 'react';
import {View,Text} from 'react-native';

const StillCharacter = ({data}) => {


    return <Text style = {{
        fontSize: 100,
        fontWeight: 'bold',
    }}>{data}</Text>;
}

export default StillCharacter;