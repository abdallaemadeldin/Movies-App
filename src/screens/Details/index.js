import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import Linear from 'react-native-linear-gradient';
import { Button } from './../../components';
import { style } from './style';
import { Colors } from './../../../app.json';
import { FlatList } from 'react-native-gesture-handler';

class Details extends Component {

    state = {

    }

    renderItem(item) {
        return (
            <View key={item.index}>

            </View>
        );
    }

    render() {
        const { container, subContainer, headerView, headerBtn, headerBtnIcon, movieHeroImage } = style;

        return (

            <SafeAreaView style={container}>
                <View style={headerView}>
                    <Button
                        icon="chevron-left"
                        iconType="material"
                        iconStyle={headerBtnIcon}
                        style={headerBtn}
                        background={null}
                    />
                </View>
                <Image source={{ uri: 'http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Image.png' }} style={movieHeroImage} />
                <Linear colors={[Colors.red, Colors.mauve, Colors.dark]} style={subContainer}>

                </Linear>
            </SafeAreaView>
        );
    }
}

export default Details;