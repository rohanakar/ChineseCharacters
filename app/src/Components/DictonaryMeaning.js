import React from 'react';
import {View,Text} from 'react-native';

const DictonaryMeaning =({data}) => {
    return <Text style = {{
        fontSize: 10,
        fontWeight: 'bold'
    }}>{data}</Text>;
}
export default DictonaryMeaning;