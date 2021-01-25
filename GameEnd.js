import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './Stylesheet';

export default class GameEnd extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            winnerName: this.props.winnerName
        }
    }

    goBack = () => {
        this.props.navigation.navigate("Home")
    }

    render(){
        return (
            <View>
                <View>
                    <Text>{this.state.winnerName} Kazandi!</Text>
                </View>
                <View>
                    <Text>{this.state.teamFirst} takimi {this.state.teamFirstScore} puan kazandi </Text>
                </View>
                <View>
                    <Text>{this.state.teamSecond} takimi {this.state.teamSecondScore} puan kazandi </Text>
                </View>

                <View>
                    <TouchableOpacity onPress={this.goBack} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Yeni Oyun</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}