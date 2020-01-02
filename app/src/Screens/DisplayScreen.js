import React, { useReducer } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ProgressBar from '../Components/ProgressBar';
import StillCharacter from '../Components/StillCharacter';
import DictonaryMeaning from '../Components/DictonaryMeaning';
import AnimatedCharacter from '../Components/AnimatedCharacter';

const { height, width } = Dimensions.get('window');
const reducer = (state, action) => {
    switch (action.type) {
        case 'switchComponent':
            return { ...state, component: action.payload };
        case 'updateIndex':
            return state.index + action.payload < 0 || state.index + action.payload >= 3 ? state : { ...state, index: state.index + action.payload }
        default:
            return state;
    }
};

const DisplayScreen = () => {

    const data = [
        {
            fileName: '11904',
            character: './../../assets/DataSet/11904.svg',
            dictonary: "How do I specify the position of B relative to A With iOS Interface Builder and autoconstraints, this can very explicitly be done and is a breeze. Its not so obvious how one might achieve this with React Native."
        },
        {
            fileName: '11912',
            character: './../../assets/DataSet/11912.svg',
            dictonary: "Hasdsad."
        },
        {
            fileName: '11914',
            character: './../../assets/DataSet/11914.svg',
            dictonary: "How do asdsad  how one might achieve this with React Native."
        },
    ]

    const [state, dispatch] = useReducer(reducer, {
        component: 'StillCharacter',
        index: 1,
    });
    console.log(state.component);
    return (
        <View>

            <SwiperFlatList
                // autoplay
                // autoplayDelay={2}
                // autoplayLoop
                disableGesture={true}
                index={state.index}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.top}>
                        {/* Top Area [left button , animated/dictonary/still right Button] */}

                            {/* ---------------- Left button Start ----------------*/}
                                <TouchableOpacity style={[styles.icon]} onPress={
                                    () => {
                                        const showComponent = updateComponenet(state.component);
                                        dispatch({
                                            type: 'updateIndex',
                                            payload: -1,
                                        });
                                        if(state.index!=0)
                                        dispatch({
                                            type: 'switchComponent',
                                            payload: 'StillCharacter',
                                        });
                                    }}
                                >
                                    <Entypo name='chevron-thin-left' size={40} />
                                </TouchableOpacity>
                            {/* ---------------- Left button End ----------------*/}

                            {/* ----------------  animated/dictonary/still Start ---------------- */}
                                
                                <TouchableOpacity style={{flex: 1,borderColor:'black',
        borderWidth:2}}
                                 onPress={
                                    () => {
                                        const showComponent = updateComponenet(state.component);
                                        dispatch({
                                            type: 'switchComponent',
                                            payload: showComponent,
                                        })
                                    }
                                }>
                                    {state.component == 'StillCharacter' ?
                                         <StillCharacter data={data[state.index].fileName} style={{borderColor:'black',
                                         borderWidth:2}} /> : null}
                                    {state.component == 'AnimatedCharacter' ?
                                         <AnimatedCharacter data={data[state.index].character} style={{borderColor:'black',
                                         borderWidth:2}}/> : null}
                                    {state.component == 'DictonaryMeaning' ?
                                         <DictonaryMeaning data={data[state.index].dictonary} style={{borderColor:'black',
                                         borderWidth:2}} /> : null}
                                </TouchableOpacity>

                            {/* ----------------  animated/dictonary/still End ---------------- */}




                            {/* ----------------   Right button Start ---------------- */}
                                <TouchableOpacity style={[styles.icon]} onPress={
                                    () => {
                                        const showComponent = updateComponenet(state.component);
                                        dispatch({
                                            type: 'updateIndex',
                                            payload: 1,
                                        });
                                        if(state.index!=2)
                                        dispatch({
                                            type: 'switchComponent',
                                            payload: 'StillCharacter',
                                        });
                                    }}
                                >
                                    <Entypo name='chevron-thin-right' size={40} />
                                </TouchableOpacity>
                            {/* ----------------   Right button End ---------------- */}
                            
                        </View>
                    )
                }}
            />


            {/* rectangle containg pingyinaudio component */}
            <ProgressBar />
        </View>
    );
};

const updateComponenet = (currentComponent) => {
    switch (currentComponent) {
        case 'StillCharacter': return 'AnimatedCharacter';
        case 'AnimatedCharacter': return 'DictonaryMeaning';
        case 'DictonaryMeaning': return 'StillCharacter';
        default: return 'N/A'
    }
};

const styles = StyleSheet.create({

    wrapper: {
        width: width
    },
    icon: {
        marginHorizontal: 0.02 * width,
        borderColor:'black',
        borderWidth:2,
        
    },
    top: {
        alignItems: 'center',
        backgroundColor: 'red',
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 0.5 * height,
        marginTop: 0.2 * height,
        marginBottom: 0.05 * height,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }


});

export default DisplayScreen;