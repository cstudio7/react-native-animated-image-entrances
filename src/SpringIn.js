import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet } from 'react-native';

export default class SpringIn extends Component {

    springValue = new Animated.Value(0.3);

    onSpringInLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad();
        } else {
            Animated.spring(this.springValue, {
                toValue: 1,
                friction: this.props.friction || 2
            }).start();
        }
    }
    render() {
        return (
            <Animated.Image
                style={[styles.image, (this.props.style) && this.props.style, {transform: [{scale: this.springValue}]} ]}
                source={{uri: this.props.source}}
                resizeMode={this.props.resizeMode || 'cover'}
                onLoadStart={this.props.onLoadStart}
                onProgress={this.props.onProgress}
                onLoad={()=>{this.onSpringInLoad()}}
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
