import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common, breakPoints } = variables;
export const enterStyles = StyleSheet.create({
	titlesBlock: {
		marginTop: 30,
	},
	termOfUseBlock: {
		...utils.flex('row'),
	},
	termOfUseText: {
		marginLeft: 7,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
		fontSize: 14,
		color: colors.dark_blue,
		marginTop: -3,
	},
	termOfUseTextLink: {
		marginLeft: 7,
		textDecorationLine: 'underline',
		fontSize: 14,
		fontFamily: fonts.popinsBold,
		color: colors.dark_blue,
		...utils.disableFontPadding,
	},
});
