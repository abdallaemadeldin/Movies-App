import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import Linear from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from './../../components';
import { style } from './style';
import { Colors } from './../../../app.json';
import { FlatList } from 'react-native-gesture-handler';

class Details extends Component {

    state = {
        categories: [{
            name: "Action"
        }, {
            name: "Adventure"
        }, {
            name: "Sci-Fi"
        }],
        cast: [{
            name: "Andrew\ngarfield",
            img: 'https://c8d8q6i8.stackpathcdn.com/wp-content/uploads/2017/07/Andrew-Garfield-Contact-Information.jpg'
        }, {
            name: "Emma\nStone",
            img: 'https://bifa.imgix.net/web/2018/12/Emma-Stone-Credit-David-Fisher.jpg?auto=compress%2Cformat&fit=scale&h=2254&ixlib=php-1.2.1&w=1600&wpsize=xl'
        }, {
            name: "Shailene\nWoodley",
            img: 'https://www.biography.com/.image/t_share/MTQzMzAzNzQ1MDA0OTA2MDU1/shailene_woodley_photo_by_michael_stewart_getty_images_515635042jpg.jpg'
        }, {
            name: "Jamie\nFoxx",
            img: 'https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict0003333709191-e1504776232344.jpg'
        }]
    }

    renderItem(item) {
        return (
            <View key={item.index} style={style.itemContainer}>
                <Image source={{ uri: item.item.img }} style={style.castImg} />
                <Text style={style.name}>{item.item.name}</Text>
            </View>
        );
    }

    render() {
        const { container, subContainer, headerView, headerBtn, headerBtnIcon, movieHeroImage, movieName, boldName, releaseDate, rateView, rateIcons, categoriesView, categoryName, FooterTitle } = style;

        return (
            <SafeAreaView style={container}>
                <View style={headerView}>
                    <Button
                        icon="chevron-left"
                        iconType="material"
                        iconStyle={headerBtnIcon}
                        style={headerBtn}
                        background={null}
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
                <Image source={{ uri: 'http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Image.png' }} style={movieHeroImage} />
                <Linear colors={[Colors.red, Colors.mauve, Colors.dark]} style={subContainer}>
                    <Text style={movieName}>THE AMAZING</Text>
                    <Text style={boldName}>SPIDER MAN 2</Text>
                    <Text style={releaseDate}>May 2014 - Marc Webb</Text>
                    <View style={rateView}>
                        {[...new Array(5)].map((e, i) => {
                            return (
                                <Icon key={i} name="star" style={rateIcons} color={i === 4 ? Colors.dark : "#FFD700"} />
                            );
                        })}
                    </View>
                    <View style={categoriesView}>
                        {
                            this.state.categories.map((e, i) => {
                                return <Text key={i} style={categoryName}>{e.name}</Text>
                            })
                        }
                    </View>
                    <Text style={FooterTitle}>Cast & Crew</Text>
                    <FlatList
                        data={this.state.cast}
                        renderItem={this.renderItem.bind(this)}
                        horizontal
                        keyExtractor={(e, i) => i.toString()}
                    />
                </Linear>
            </SafeAreaView>
        );
    }
}

export default Details;