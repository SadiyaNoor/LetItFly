import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import * as React from 'react';

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};



export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [breathState, setBreathState] = React.useState(true)

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => setIsPlaying(prev => !prev)}
        style={styles.button}>
        <Text>Balloon</Text>
      </TouchableOpacity>
      <Text style={styles.breathstate}> Inhale
      </Text>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={4}
        colors={["#D5CE58"]}
        colorsTime={[4]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize:35, textAlign: 'center'}}>
          {renderTime('', remainingTime)}
        </Text>
      )}
    </CountdownCircleTimer>
    
    
  </View>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#D5CE58',
  },
  breathstate: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 170,
    fontSize: 30,
    color: "#FFFFFF",
    
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#104210',
    padding: 25,
  },
  
  
});