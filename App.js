import React from 'react';
import {Text, View, TextInput, Picker } from 'react-native';
import Slider from '@react-native-community/slider';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import Game from './Game.js';
import GameEnd from './GameEnd';

import styles from './Stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      teamFirst: "Takim 1",
      teamSecond: "Takim 2",
      selectedMinute: 2,
      selectedSeconds: 120,
      limitScore: 20
    }
  }

  pickTime(val){
    this.setState({selectedMinute: val, selectedSeconds: parseInt(val) * 60})
  }

  render(){
    return (<View>
      <View style={styles.formContainer}>
        <Text style={styles.formContainerText}>Birinci Takim</Text>
        <TextInput 
        placeholder="Birinci Takim" 
        onChangeText={(teamFirst) => this.setState({ teamFirst: teamFirst })}
        style={styles.textInput}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formContainerText}>Ikinci Takim</Text>
        <TextInput 
        placeholder="Ikinci Takim" 
        onChangeText={(teamSecond) => this.setState({ teamSecond: teamSecond })}
        style={styles.textInput}
        />
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.formContainerText, {textAlign: "left", position: "absolute"}]}>Kacta biter?</Text>
          <Text style={[styles.formContainerText, {textAlign: "right"}]}>{this.state.limitScore}</Text>
        </View>

        <Slider 
          minimumValue={10}
          maximumValue={100}
          step={5}
          value={this.state.limitScore}
          onValueChange={(limitScore) => this.setState({ limitScore: limitScore })}
        />
      </View>

      <View style={[styles.formContainer, {borderWidth: 2, borderRadius: 15, padding: 15, marginBottom: 10}]}>
        <Text style={styles.formContainerText}>Sure</Text>
      <Picker 
        selectedValue={this.state.selectedMinute}
        onValueChange={(value, pos) => this.pickTime(value)}
      >
        <Picker.Item label="1 Dakika" value={1} />
        <Picker.Item label="2 Dakika" value={2} />
        <Picker.Item label="3 Dakika" value={3} />
        <Picker.Item label="4 Dakika" value={4} />
        <Picker.Item label="5 Dakika" value={5} />
      </Picker>
      </View>
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => this.props.navigation.navigate("Game", {
          teamFirst: this.state.teamFirst,
          teamSecond: this.state.teamSecond,
          selectedSeconds: this.state.selectedSeconds,
          isPaused: false,
          limitScore: this.state.limitScore
        })}   
      >
        <Text style={styles.startButtonText}>Oyuna Basla</Text>
      </TouchableOpacity>
    </View>)
  }

}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Home navigation={navigation}/>
    </View>
  );
}

function GameEndScreen({route, navigation}){

  return (
    <View style={styles.container}>
      <GameEnd 
        navigation={navigation}
        winnerName={route.params.playerTeam}
        teamFirst={route.params.teamFirst}
        teamSecond={route.params.teamSecond}
        teamFirstScore={route.params.teamFirstScore}
        teamSecondScore={route.params.teamSecondScore}
        teamFirstPass={route.params.teamFirstPass}
        teamSecondPass={route.params.teamSecondPass}
      />
    </View>
  )
}

function useToggle(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}

function GameScreen({route, navigation}){
  const [isPaused, toggleIsPaused] = useToggle(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleIsPaused}>
           <AntDesign name="playcircleo" size={32} color="white" padding={5} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  console.log("game screen: "+ isPaused);
  return (
    <View style={styles.container}>
      <Game 
        teamFirst={route.params.teamFirst} 
        teamSecond={route.params.teamSecond}
        seconds={route.params.selectedSeconds}
        isPaused={isPaused}
        limitScore={route.params.limitScore}
        navigation={navigation}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Tabu',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          initialParams={{teamFirst: "-", teamSecond: "-", isPaused: false}}
          options={{
            title: 'Oyun',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="GameEnd"
          component={GameEndScreen}
          options={{
            title: 'Son',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;