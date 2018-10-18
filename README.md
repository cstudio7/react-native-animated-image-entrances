## react-native-animated-image-entrances
Wrap any image in various components and have them render with cool effects after loading.

![FadeIn](https://media.giphy.com/media/FsV9SwhTc8i83Qfquz/giphy.gif)
![SpringIn](https://media.giphy.com/media/7zlZmUE1E2YzX4IjEa/giphy.gif)
![ZoomIn](https://media.giphy.com/media/Y4sXnyfa89eMesZ0lI/giphy.gif)
![SlideInFromTop](https://media.giphy.com/media/1BceVYNRcd23I1pRNO/giphy.gif)


### Installation
```
npm install --save react-native-animated-image-entrances
```

### Usage
```javascript
import {
    FadeIn,
    PulsateIn,
    RotateIn,
    SlideInFromTop,
    SlideInFromLeft,
    SlideInFromRight,
    SlideInFromBottom,
    SpringIn,
    ZoomIn
 } from 'react-native-animated-image-entrances';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            <FadeIn
                source='https://images.unsplash.com/photo-1539744208579-527f98343df2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d232c4048911a75aa1522a1244d0e99c&auto=format&fit=crop&w=281&q=80'
                style={{ height: 300, width: 300 }}
                animationDuration={5000}
            />
            </View>
        );
    }
}
```

### Props

#### FadeIn
| Property      | Type          | Default      | Description |
| ------------- |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| animationDuration| integer    | 4000         | The duration the animation lasts in ms. Lower number means faster animation

#### SpringIn
| Property      | Type          | Default      | Description |
| ------------- |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| friction| integer    | 2         | the friction for the spring animation


#### PulsateIn
| Property         | Type          | Default      | Description |
| -------------    |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| animationDuration| integer    | 2000         | The duration the animation lasts in ms. Lower number means faster animation
| inputRange .     | array      | [0, 0.2, 0.5, 0.7, 0.9, 1]  | 0 to 1
| outputRange .    | array      | [0.9, 1, 0.9, 1, 0.9, 1] | output array

#### RotateIn
| Property         | Type          | Default      | Description |
| -------------    |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| animationDuration| integer    | 2000         | The duration the animation lasts in ms. Lower number means faster animation
| inputRange .     | array      | [0, 1]  | input array
| outputRange .    | array      | ['0deg', '360deg'] | use 720deg to rotate twice, 1080deg to rotate thrice and so on

#### ZoomIn
| Property         | Type          | Default      | Description |
| -------------    |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| animationDuration| integer    | 2000         | The duration the animation lasts in ms. Lower number means faster animation
| inputRange .     | array      | 0, 0.2, 0.5, 0.7, 0.9, 1]  | input range
| outputRange .    | array      | [0.3, 0.5, 0.6, 0.8, 0.9, 1] | output range


#### SlideInFromLeft, SlideInFromRight, SlideInFromTop, SlideInFromBottom
| Property         | Type          | Default      | Description |
| -------------    |:-------------:|:------------:| ----------- |
| source (required)| string     | null         | remote url of image
| animationDuration| integer    | 2000         | The duration the animation lasts in ms. Lower number means faster animation
| inputRange .     | array      | 0, 1]  | input range
| outputRange .    | array      | [-100, 100] | Specify final placement or where image slides to.

### Other Props
| Property         | Type          | Default      | Description |
| -------------    |:-------------:|:------------:| ----------- |
| resizeMode| string   | cover         | image resizeMode
| onLoad| function    | -         | Override the current animation with your own method
| style .     | object      | { height: 100, width: 100 }  | style attributes for image
| onProgress .    | function      | null |  -
| onLoadStart .     | function     null  | -
| onLoadEnd .    | function      | null |  -
| onError .     | function     | null  | -



