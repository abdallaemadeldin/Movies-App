import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, fontScale } = Dimensions.get('screen');
const fontFamily = "MartelSans-SemiBold";

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.main
    },
    subContainer: {
        width: width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    headerView: {
        width: width,
        height: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: '2%'
    },
    mainView: {
        flex: 1,
        width: width
    },
    headerBtn: {
        width: 40 * fontScale,
        height: 40 * fontScale,
        backgroundColor: Colors.red,
        borderWidth: 0,
        borderRadius: 20 * fontScale,
        elevation: 5,
        marginHorizontal: '5%'
    },
    headerBtnIcon: {
        color: Colors.white,
        fontSize: 20 * fontScale
    },
    mainViewTitle: {
        marginHorizontal: '5%',
        fontSize: 30 * fontScale,
        color: Colors.white,
        fontFamily: fontFamily
    },
    inactiveCategory: {
        justifyContent: 'center',
        marginEnd: '3%'
    },
    activeCategory: {
        justifyContent: 'center',
        marginEnd: '3%'
    },
    categoryInactiveName: {
        fontFamily: fontFamily,
        fontSize: 10 * fontScale,
        color: '#FFFFFF90'
    },
    categoryActiveName: {
        fontFamily: fontFamily,
        fontSize: 14 * fontScale,
        color: '#FFFFFF'
    },
    cursol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginStart: '5%',
        marginBottom: '3%'
    },
    largeCursol: {
        width: 20,
        height: 2,
        borderRadius: 1,
        backgroundColor: Colors.white
    },
    smallCursol: {
        width: 5,
        height: 2,
        borderRadius: 1,
        backgroundColor: Colors.white,
        marginStart: '5%'
    },
    itemContainer: {
        flex: 1,
        width: (width * 50 / 100) - 40,
        margin: 10,
        backgroundColor: 'transparent',
        height: 230,
        borderRadius: 20,
        elevation: 5,
        overflow: 'hidden'
    },
    itemImage: {
        width: '100%',
        height: '100%'
    }
});