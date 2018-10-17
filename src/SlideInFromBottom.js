import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet } from 'react-native';

export default class SlideInFromBottom extends Component {

    slideInValue = new Animated.Value(0);

    slideIn = this.slideInValue.interpolate({
        inputRange: this.props.inputRange || [0, 1],
        outputRange: this.props.outputRange || [-100, 100]
    })
    onSlideInLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad();
        } else {
            Animated.timing(this.slideInValue, {
                toValue: 1,
                duration: this.props.animationDuration || 2000,
                easing: Easing.ease
            }).start();
        }
    }
    render() {
        return (
            <Animated.Image
                style={[styles.image, (this.props.style) && this.props.style, {bottom: this.slideIn, position: 'absolute' } ]}
                source={{uri: this.props.source}}
                resizeMode={this.props.resizeMode || 'cover'}
                onLoadStart={this.props.onLoadStart}
                onProgress={this.props.onProgress}
                onLoad={()=>{this.onSlideInLoad()}}
                onError={this.props.onError}
                onLoadEnd={this.props.onLoadEnd}
            >
                {this.props.children}
            </Animated.Image>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
});
