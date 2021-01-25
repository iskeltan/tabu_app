import React from 'react';
import {Text, View} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';

class CountDown extends React.Component{
    constructor(props){
        super(props);
        this.state = { time: {}, seconds: this.props.seconds, isPaused: this.props.isPaused };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        if(seconds < 10){
            seconds = '0' + seconds;
        }

        if(minutes < 10){
            minutes = '0' + minutes;
        }

        let obj = {
          "minutes": minutes,
          "seconds": seconds
        };
        return obj;
      }

      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer()
      }
    
      startTimer() {;
        if (this.timer == 0 && this.state.seconds > 0 && !this.props.isPaused) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds;
        if(!this.props.isPaused){
            seconds = this.state.seconds - 1;
        }
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
            this.props.timeEnd(this);
          clearInterval(this.timer);
        }
      }

    render(){
        let leftTime = this.secondsToTime(this.state.seconds);
        let yuzde = 100 * this.state.seconds / this.props.seconds;
        console.log(this.state.seconds);
        console.log(this.props.seconds);
        
        if(this.props.isPaused){
            return (
                <View>
            <AnimatedCircularProgress
            size={55}
            width={2}
            fill={yuzde}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875">
                {
                    (fill) => (
                        <Text 
                            style={{color: 'white', fontWeight: 'bold'}}>
                                <Ionicons name="pause" size={32} />
                        </Text>
                    )
                }
        </AnimatedCircularProgress>
        </View>
            )
        }
        return (<View>
            <AnimatedCircularProgress
            size={55}
            width={2}
            fill={yuzde}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875">
                {
                    (fill) => (
                        <Text 
                            style={{color: 'white', fontWeight: 'bold'}}>
                                {leftTime.minutes}:{leftTime.seconds}
                        </Text>
                    )
                }
        </AnimatedCircularProgress>
        </View>)
    }

}

export default CountDown;