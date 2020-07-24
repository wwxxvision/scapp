import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common, breakPoints } = variables;
export const introStyles = StyleSheet.create({
	container: {
		...utils.flex('column'),
		alignItems: 'center',
	},
	headerBlock: {
		...utils.flex('column'),
		alignItems: 'center',
	},
	block: {
		marginTop: 29,
	},
	backgroundsSizes: {
		height: 200,
		width: 200,
	},
	appName: {
		fontSize: 20,
		fontFamily: fonts.popins,
		color: colors.dark_blue,
		...utils.disableFontPadding,
	},
	title: {
		...common.title,
		...utils.disableFontPadding,
	},
	description: {
		fontSize: 16,
		fontFamily: fonts.popins,
		color: colors.dark_blue,
		textAlign: 'center',
		lineHeight: 25,
	},
});
