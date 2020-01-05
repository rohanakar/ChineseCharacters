import React, { useReducer } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ProgressBar from '../Components/ProgressBar';
import StillCharacter from '../Components/StillCharacter';
import DictonaryMeaning from '../Components/DictonaryMeaning';
import AnimatedCharacter from '../Components/AnimatedCharacter';

const data = [
    {
        'character': "⺀",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "How do I specify the position of B relative to A With iOS Interface Builder and autoconstraints, this can very explicitly be done and is a breeze. Its not so obvious how one might achieve this with React Native."
    },
    {
        'character': "B",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "Screen 2."
    },
    {
        'character': "C",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "Screen 3"
    },
    {
        'character': "D",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "How do I specify the position of B relative to A With iOS Interface Builder and autoconstraints, this can very explicitly be done and is a breeze. Its not so obvious how one might achieve this with React Native."
    },
    {
        'character': "E",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "Screen 2."
    },
    {
        'character': "F",
        'svgData': {
            'strokes': [
                "M 323 706 Q 325 699 328 694 Q 334 686 367 671 Q 474 619 574 561 Q 600 545 617 543 Q 627 545 631 559 Q 641 576 613 621 Q 575 684 334 717 Q 321 719 323 706 Z",
                "M 312 541 Q 314 535 316 531 Q 320 524 347 512 Q 455 461 563 397 Q 588 380 606 380 Q 615 382 619 396 Q 629 414 602 457 Q 564 519 321 554 Q 320 555 319 555 Q 310 555 312 541 Z"
            ],
            'animatedStrokes': [
                'M 336 320 L 450 358 L 554 404 L 587 429 L 614 466',
                'M 317  476 L 347 493 L 455 528 L 543 568 L 578 594 L 602 629'
            ]
        },
        dictonary: "Screen 3"
    },
]

const { height, width } = Dimensions.get('window');
const reducer = (state, action) => {
    switch (action.type) {
        case 'switchComponent':
            return { ...state, component: action.payload };
        case 'updateIndex':
            return state.index + action.payload < 0 || state.index + action.payload >= data.length ? state : { ...state, index: state.index + action.payload }
        default:
            return state;
    }
};

const DisplayScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        component: 'StillCharacter',
        index: 0,
    });
    console.log(state.component);
    return (
        <View>


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
                        if (state.index != 0)
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

                <TouchableOpacity style={{ flex: 1 }}
                    onPress={
                        () => {
                            const showComponent = updateComponenet(state.component);
                            dispatch({
                                type: 'switchComponent',
                                payload: showComponent,
                            })
                        }
                    }>
                    <View style={{ width: width * 0.72, height: 0.5 * height, alignItems: 'center', justifyContent: 'center' }} >
                        {state.component == 'StillCharacter' ?
                            <StillCharacter data={data[state.index].character} /> : null}
                        {state.component == 'AnimatedCharacter' ?
                            <AnimatedCharacter data={{ ...data[state.index].svgData, wParent: width * 0.72, hParent: 0.5 * height }} /> : null}
                        {state.component == 'DictonaryMeaning' ?
                            <DictonaryMeaning data={data[state.index].dictonary} /> : null}</View>
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
                        if (state.index != data.length)
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


            {/* rectangle containg pingyinaudio component */}
            <View style={{ top: 0.91 * height, left: 0, position: 'absolute' }}>
                <ProgressBar data={{ index: state.index, length: data.length }} /></View>
        </View>)

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
    },
    top: {
        alignItems: 'center',
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 0.5 * height,
        marginTop: 0.2 * height,
        marginBottom: 0.05 * height,
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }


});

export default DisplayScreen;