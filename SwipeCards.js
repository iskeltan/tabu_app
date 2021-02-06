import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import styles from './Stylesheet';

class BannedWord extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.buttonContainer}>
                <Text style={styles.choice}>{this.props.text}</Text>
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
            <View style={styles.card}>
                <Text style={styles.cardText}>{this.props.text}</Text>
                {
                    this.props.bannedWords.map((prop, key) => {
                        return <BannedWord text={prop} />;
                    })
                }
                
            </View>
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