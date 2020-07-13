import {StyleSheet} from 'react-native';
import {variables} from '../Base/index';

const {colors} = variables;
const buttonStyles = StyleSheet.create({
	button: {
		width: '100%',
		height: 25,
		borderRadius: 10,
	},
	buttonTheme: {
		lightBlue: {
			backgroundColor: colors.light_blue,
			color: colors.white,
		},
		darkBlue: {
			backgroundColor: colors.dark_blue,
			color: colors.white,
		},
		white: {
			backgroundColor: colors.white,
			color: colors.dark_blue,
			borderWidth: 1,
			borderColor: colors.blue,
		},
		disable: {
			backgroundColor: colors.biege,
			color: colors.biege_dark,
		},
		danger: {
			backgroundColor: colors.red_dark,
			color: colors.white,
		},
		opacity: {
			backgroundColor: colors.blue,
			color: colors.white,
		},
		transparent: {
			backgroundColor: 'transparent',
			color: colors.white,
		},
	},
});
