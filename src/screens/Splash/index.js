import React, { Component } from 'react';
import { Image } from 'react-native';
import { style } from './style';
import Linear from 'react-native-linear-gradient';
import { Colors } from './../../../app.json';

class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Home');
        }, 4000);
    }

    render() {
        const { container, logo } = style;

        return (
            <Linear colors={[Colors.red, Colors.mauve, Colors.dark]} style={container}>
                <Image source={require('./../../assets/logo.png')} style={logo} />
            </Linear>
        );
    }
}

export default Splash;