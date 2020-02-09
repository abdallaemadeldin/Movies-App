import { StyleSheet, Dimensions, Image } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, fontScale } = Dimensions.get('screen');
const fontFamily = "MartelSans-SemiBold";
Image.getSize('http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Image.png', (w, h) => {
    // alert((h * width * 70 / 100) / w);
})

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.white
    },
    subContainer: {
        width: width,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        overflow: 'hidden'
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
        width: width * 70 / 100,
        height: 252,
        zIndex: 10,
        alignSelf: 'center',
        transform: [{
            rotateY: '180deg'
        }]
    }
});