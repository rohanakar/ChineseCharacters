import React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { AnimatedSVGPath } from 'react-native-svg-animations';

const { height, width } = Dimensions.get('window');
const DURATION = 1000;

const AnimatedCharacter = ({data}) => {
  
  const svgData = data;
  const sideSquare = Math.min(data.wParent,data.hParent);
  const scaleFactor = sideSquare/1024;

  const getSvgStrokeJsx = () => {
      var jsx = [];
      var i =0;
      for(i=0;i<svgData.strokes.length;i++){
          jsx.push(<Path key={i} d={svgData.strokes[i]} fill="lightgray" />);
      }
      return jsx;
    };

    const getSvgAnimationJsx = () => {
      var jsx = [];
      var i = 0;
      for(i=0;i<svgData.animatedStrokes.length;i++){
        jsx.push(
          <View key={i} style = {{top:0,left:0,position:'absolute',height:sideSquare,width:sideSquare}}>
          <AnimatedSVGPath
          strokeColor={"black"}
          strokeWidth={32}
          duration={DURATION}
          height={1024}
          width={1024}
          scale={scaleFactor}
          delay={i*DURATION}
          d={svgData.animatedStrokes[i]}
          stroke-linecap="round"
          loop={false}
        /></View>
        );
      }
    //  console.log(jsx);
      return jsx;
    };

    return (
      <View>
        <View style = {{height:sideSquare,width:sideSquare}}> 
         
          <Svg height='100%' width = '100%' viewBox="0 0 1024 1024"  >
              { getSvgStrokeJsx() }
          </Svg>
        </View>    
        
              { getSvgAnimationJsx() }
        
            </View>
    );
  };

const syles = StyleSheet.create({});

export default AnimatedCharacter;