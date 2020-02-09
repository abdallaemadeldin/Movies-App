import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import Linear from 'react-native-linear-gradient';
import { Button } from './../../components';
import { style } from './style';
import { Colors } from './../../../app.json';
import { FlatList } from 'react-native-gesture-handler';

class Home extends Component {

    state = {
        categories: [{
            name: "New",
            active: true
        }, {
            name: "Popular",
            active: false
        }, {
            name: "Upcoming",
            active: false
        }],
        movies: [{
            url: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/darkphoenix_lob_crd_01.jpg'
        }, {
            url: 'https://www.tolkienlibrary.com/press/images/movie-tie-in-The-hobbit.jpg'
        }, {
            url: 'https://images.squarespace-cdn.com/content/v1/5609d907e4b02241efa8d515/1494117835017-K93S9QNJ6XMKV3TTP5OB/ke17ZwdGBToddI8pDm48kKpZho-h8Uife6JDzdx1caJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMCg6RGY8TrcVSOIk4QoDPm21bUsAYssjNe5IVx_QUCBnWz8ZzAhyVJMzlespv7Ql/image-asset.jpeg'
        }, {
            url: 'https://i.pinimg.com/736x/5f/7e/78/5f7e78bc94aec8b842fb251900008b00.jpg'
        }, {
            url: 'https://m.media-amazon.com/images/M/MV5BMTExMTk2ODk0NDNeQTJeQWpwZ15BbWU4MDMxNTExNjIy._V1_.jpg'
        }, {
            url: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg'
        }]
    }

    renderItem(item) {
        return (
            <TouchableOpacity key={item.index} style={style.itemContainer} onPress={() => this.props.navigation.navigate('Details')}>
                <Image source={{ uri: item.item.url }} style={style.itemImage} />
            </TouchableOpacity>
        );
    }

    render() {
        const { categories, movies } = this.state;
        const { container, subContainer, headerView, mainView, headerBtn, headerBtnIcon, mainViewTitle, inactiveCategory, activeCategory, categoryInactiveName, categoryActiveName, categoriesContainer, cursol, largeCursol, smallCursol } = style;

        return (
            <Linear colors={[Colors.red, Colors.mauve, Colors.dark]} style={container}>
                <SafeAreaView style={subContainer}>
                    <View style={headerView}>
                        <View style={{ flex: 1 }}>
                            <Button
                                icon="chevron-left"
                                iconType="material"
                                iconStyle={headerBtnIcon}
                                style={headerBtn}
                                background={null}
                            />
                        </View>
                        <Button
                            icon="magnify"
                            iconType="material"
                            iconStyle={headerBtnIcon}
                            style={headerBtn}
                            background={null}
                        />
                    </View>
                    <View style={mainView}>
                        <Text style={mainViewTitle}>MOVIES</Text>
                        <View style={categoriesContainer}>
                            {
                                categories.map((e, i) => {
                                    const { active, name } = e;

                                    return (
                                        <TouchableOpacity style={active ? activeCategory : inactiveCategory} key={i} onPress={() => {
                                            categories.forEach((x, index) => {
                                                if (i != index) {
                                                    categories[index].active = false;
                                                } else {
                                                    categories[index].active = true;
                                                }
                                            })
                                            this.setState({ categories: categories });
                                        }}>
                                            <Text style={active ? categoryActiveName : categoryInactiveName}>{name}</Text>
                                            <View style={[cursol, { display: active ? 'flex' : 'none' }]}>
                                                <View style={largeCursol} />
                                                <View style={smallCursol} />
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                        <FlatList
                            data={movies}
                            renderItem={this.renderItem.bind(this)}
                            numColumns={2}
                            keyExtractor={(x, i) => i.toString()}
                        />
                    </View>
                </SafeAreaView>
            </Linear>
        );
    }
}

export default Home;