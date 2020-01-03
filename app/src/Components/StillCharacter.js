import React from 'react';
import {View,Text} from 'react-native';
import { Html5Entities } from 'html-entities'; 

const StillCharacter = ({data}) => {

    const entities = new Html5Entities();
    const convertToChinese = () => {
        return (+data).toString(16);
    };
    return <Text style = {{
        fontSize: 100,
        fontWeight: 'bold',
    }}>{entities.decode('&#'+data)}</Text>;
}

export default StillCharacter;