import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons'; 


import styles from './Stylesheet';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const nopeGradient = ['#FF4B2B', '#FF416C'];
const maybeGradient = ['#667db6', '#0082c8', '#667db6'];
const yupGradient = ['#38ef7d', '#12cc85'];

class PastWords extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            bannedWords: this.props.bannedWords,
            eventType: this.props.eventType
        }
    }

    render(){
        let color = [];
        if(this.state.eventType == "yup"){
            color = yupGradient;
        }else if(this.state.eventType == "nope"){
            color = nopeGradient;
        }else{
            color = maybeGradient;
        }
        return (
            <LinearGradient colors={color} style={styles.pastWords}>
                <Text style={styles.pastWordsText}>{this.state.text}</Text>
            </LinearGradient>
        )
    }
}

export default class GameEnd extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            teamFirst: this.props.teamFirst,
            teamSecond: this.props.teamSecond,
            teamFirstScore: this.props.teamFirstScore,
            teamSecondScore: this.props.teamSecondScore,
            teamFirstPass: this.props.teamFirstPass,
            teamSecondPass: this.props.teamSecondPass,
            winnerName: this.props.winnerName
        }
    }

    goBack = () => {
        this.props.navigation.navigate("Home")
    }

    render(){
        return (
            <View style={{flex: 3, alignContent: 'center', justifyContent: 'center'}}>
                <View style={styles.endWinner}>
                    <FontAwesome5 name="grin-wink" size={50} color="#98C1D9" style={{justifyContent: 'center', textAlign: 'center', marginBottom: 10}}/>
                    <Text style={styles.endText}>{this.props.winnerName} Kazandı!</Text>
                </View>
                <View style={styles.endTeam}>
                <AntDesign name="areachart" size={50} color="#98C1D9" style={{justifyContent: 'flex-start', textAlign: 'center', marginBottom: 10}} />
                <Text style={styles.endText}>{this.state.teamFirst} {this.state.teamFirstScore} puan kazandı </Text>
                <FlatList 
                        data={this.props.teamFirstWords}
                        horizontal={true}
                        renderItem={({item}) => (
                            <PastWords 
                                text={item.text}
                                bannedWords={item.bannedWords}
                                eventType={item.eventType}
                            /> 
                        )}
                    />
                </View>
                <View style={styles.endTeam}>
                <AntDesign name="areachart" size={50} color="#98C1D9" style={{justifyContent: 'flex-start', textAlign: 'center', marginBottom: 10}} />
                    <Text style={styles.endText}>{this.state.teamSecond} {this.state.teamSecondScore} puan kazandı </Text>
                    <FlatList 
                        data={this.props.teamSecondWords}
                        horizontal={true}
                        renderItem={({item}) => (
                            <PastWords 
                                text={item.text}
                                bannedWords={item.bannedWords}
                                eventType={item.eventType}
                            /> 
                        )}
                    />
                </View>

                <View style={{flex: 1, flexDirection: 'column'}}>
                    <TouchableOpacity onPress={this.goBack} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Yeni Oyun</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}