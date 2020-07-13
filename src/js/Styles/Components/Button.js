import { StyleSheet } from 'react-native';
import { variables, utils } from '../Base/';

const { colors, fonts } = variables;
export const buttonStyles = StyleSheet.create({
	button: {
		borderRadius: 10,
		...utils.flex_centered,
		marginTop: 10,
	},
	big: {
		width: '100%',
		height: 52,
	},
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
		color: colors.white,
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
		borderColor: colors.white,
		borderWidth: 1,
	},
	buttonTitle: {
		fontSize: 16,
		fontFamily: fonts.popinsBold,
	},
});
