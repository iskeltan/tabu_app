import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons'; 


import styles from './Stylesheet';

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
                    <Text style={styles.endText}>{this.props.winnerName} Kazandi!</Text>
                </View>
                <View style={styles.endWinner}>
                <AntDesign name="areachart" size={50} color="#98C1D9" style={{justifyContent: 'flex-start', textAlign: 'center', marginBottom: 10}} />
                <Text style={styles.endText}>{this.state.teamFirst} {this.state.teamFirstScore} puan kazandi </Text>
                </View>
                <View style={styles.endWinner}>
                <AntDesign name="areachart" size={50} color="#98C1D9" style={{justifyContent: 'flex-start', textAlign: 'center', marginBottom: 10}} />
                    <Text style={styles.endText}>{this.state.teamSecond} {this.state.teamSecondScore} puan kazandi </Text>
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