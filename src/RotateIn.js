import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet } from 'react-native';

export default class RotateIn extends Component {

    rotateValue = new Animated.Value(0);
    rotate = this.rotateValue.interpolate({
        inputRange: this.props.inputRange || [0, 1],
        outputRange: this.props.outputRange || ['0deg', '360deg']
    });
    scale = this.rotateValue.interpolate({
        inputRange: this.props.inputRange || [0, 0.5, 1],
        outputRange: this.props.outputRange || [0.3, 0.7, 1]
    })
    onRotateLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad();
        } else {
            Animated.timing(this.rotateValue, {
                toValue: 1,
                duration: this.props.animationDuration || 2000,
                easing: Easing.ease
            }).start();
        }
    }
    render() {
        return (
            <Animated.Image
                style={[styles.image, (this.props.style) && this.props.style, {transform: [{rotate: this.rotate}]} ]}
                source={{uri: this.props.source}}
                resizeMode={this.props.resizeMode || 'cover'}
                onLoadStart={this.props.onLoadStart}
                onProgress={this.props.onProgress}
                onLoad={()=>{this.onRotateLoad()}}
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
