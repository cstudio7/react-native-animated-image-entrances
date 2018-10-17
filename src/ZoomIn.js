import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet } from 'react-native';

export default class ZoomIn extends Component {
    pulseValue = new Animated.Value(0);
    scale = this.pulseValue.interpolate({
        inputRange: this.props.inputRange || [0, 0.2, 0.5, 0.7, 0.9, 1],
        outputRange: this.props.outputRange || [0.3, 0.5, 0.6, 0.8, 0.9, 1]
    })

    onPulseLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad();
        } else {
            Animated.timing(this.pulseValue, {
                toValue: 1,
                duration: this.props.animationDuration || 2000,
                easing: Easing.in
            }).start();
        }
    }
    render() {
        return (
            <Animated.Image
                style={[styles.image, (this.props.styles) && this.props.style, {transform: [{scale: this.scale}]} ]}
                source={{ uri: this.props.source}}
                resizeMode={this.props.resizeMode || 'cover'}
                onLoadStart={this.props.onLoadStart}
                onProgress={this.props.onProgress}
                onLoad={()=>{this.onPulseLoad()}}
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
