import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet } from 'react-native';

export default class FadeIn extends Component {

    opacity = new Animated.Value(0);

    onFadeInLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad();
        } else {
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: this.props.animationDuration || 4000,
                easing: Easing.ease
            }).start();
        }
    }
    render() {
        return (
            <Animated.Image
                style={[styles.image, (this.props.style) && this.props.style, {opacity: this.opacity}]}
                source={{uri: this.props.source}}
                resizeMode={this.props.resizeMode || 'cover'}
                onLoadStart={this.props.onLoadStart}
                onProgress={this.props.onProgress}
                onLoad={()=>{this.onFadeInLoad()}}
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
