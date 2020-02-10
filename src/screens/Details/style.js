import { StyleSheet, Dimensions, Image } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, fontScale } = Dimensions.get('screen');
const regular = "MartelSans-Regular";
const fontFamily = "MartelSans-SemiBold";
Image.getSize('http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Image.png', (w, h) => {
    global.heroImgHeight = (h * ((width * 65) / 100)) / w;
});

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.white
    },
    subContainer: {
        width: width,
        height: '70%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        overflow: 'hidden',
        paddingTop: '30%'
    },
    headerView: {
        width: width,
        height: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    mainView: {
        flex: 1,
        width: width
    },
    headerBtn: {
        width: 40 * fontScale,
        height: 40 * fontScale,
        backgroundColor: Colors.white,
        borderWidth: 0,
        borderRadius: 20 * fontScale,
        elevation: 5,
        marginHorizontal: '5%'
    },
    headerBtnIcon: {
        color: '#000',
        fontSize: 20 * fontScale
    },
    movieHeroImage: {
        width: width * 65 / 100,
        height: global.heroImgHeight,
        zIndex: 10,
        alignSelf: 'center',
        transform: [{
            rotateY: '180deg'
        }]
    },
    movieName: {
        color: Colors.white,
        fontFamily: regular,
        fontSize: 15 * fontScale,
        textAlign: 'center'
    },
    boldName: {
        color: Colors.white,
        fontFamily: fontFamily,
        fontSize: 20 * fontScale
    },
    releaseDate: {
        color: '#ccc',
        fontSize: 10 * fontScale,
        fontFamily: regular
    },
    rateView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    categoriesView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
    rateIcons: {
        fontSize: 18 * fontScale,
        marginTop: '2%'
    },
    categoryName: {
        fontFamily: regular,
        fontSize: 14 * fontScale,
        backgroundColor: '#581A35',
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        marginHorizontal: '2%',
        borderRadius: 10,
        overflow: 'hidden',
        color: Colors.white
    },
    FooterTitle: {
        alignSelf: 'flex-start',
        marginVertical: '2%',
        marginStart: '5%',
        fontFamily: fontFamily,
        fontSize: 18 * fontScale,
        color: Colors.white
    },
    itemContainer: {
        width: width * 20 / 100,
        marginHorizontal: width * 2.5 / 100,
        backgroundColor: 'transparent'
    },
    name: {
        fontFamily: fontFamily,
        fontSize: 10 * fontScale,
        color: Colors.white,
        textAlign: 'center',
        lineHeight: 15,
        marginTop: '8%'
    },
    castImg: {
        width: '100%',
        height: '70%',
        borderRadius: 10
    }
});