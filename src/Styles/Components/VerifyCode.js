import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const verifyCodeStyles = StyleSheet.create({
	container: {
		...utils.flex('column'),
		justifyContent: 'center',
	},
	inputsWrapper: {
		...utils.flex('row'),
		justifyContent: 'space-between',
	},
	verifyCodeInput: {
		textAlign: 'center',
		fontSize: 14,
		color: colors.dark_blue,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
		paddingVertical: 0,
		paddingLeft: 24,
		paddingRight: 24,
	},
	textValidation: {
		...common.errors.text,
		marginTop: 10,
	},
	timer: {
		fontSize: 14,
		fontFamily: fonts.popins,
		textAlign: 'center',
	},
});
