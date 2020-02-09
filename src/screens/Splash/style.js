import { StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const logo = Image.resolveAssetSource(require('./../../assets/logo.png'));
const logoWidth = width * 50 / 100;
const logoHeight = (logo.height * logoWidth) / logo.width;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        width: logoWidth,
        height: logoHeight
    }
});