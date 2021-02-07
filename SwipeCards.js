import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SwipeCards from 'react-native-swipe-cards';

import styles from './Stylesheet';

class BannedWord extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.buttonContainer}>
                <LinearGradient colors={['#009688', '#02b09f']}>
                    <Text style={styles.choice}>{this.props.text}</Text>
                </LinearGradient>
            </View>
        )
    }
}
class Card extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <LinearGradient colors={['#9dd0d1', '#badfe0', '#E0FBFC']} style={styles.card}>
                
                    <Text style={styles.cardText}>{this.props.text}</Text>
                    {
                        this.props.bannedWords.map((prop, key) => {
                            return <BannedWord text={prop} />;
                        })
                    }
            </LinearGradient>
        )
    }
}

class NoMoreCards extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Text style={styles.noMoreCardsText}>no more cards</Text>
            </View>
        )
    }
}

export default class extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let pointerEvents = this.props.touchable ? 'none':'auto';
        return (
            <View pointerEvents={pointerEvents} style={{flex:1}}>
                <SwipeCards 
                    cards={this.props.cards}
                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}
                    handleYup={this.props.handleYup}
                    handleNope={this.props.handleNope}
                    handleMaybe={this.props.handleMaybe}
                    hasMaybeAction={this.props.maybeActive}
                    yupText="Doğru"
                    nopeText="Tabu"
                    maybeText="Pas"
                    containerStyle={styles.allCards}
                    yupStyle={styles.yupStyle}
                    yupTextStyle={styles.text}
                    nopeStyle={styles.nopeStyle}
                    nopeTextStyle={styles.text}
                    maybeStyle={styles.maybeStyle}
                    maybeTextStyle={styles.text}
                    loop={true}
                />
            </View>
        )
    }
}