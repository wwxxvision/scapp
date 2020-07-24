import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const progressStyles = StyleSheet.create({
	bigCircle: {
		borderColor: colors.blue,
		borderWidth: 4,
		backgroundColor: 'transparent',
		...utils.flex('row'),
		alignItems: 'center',
		justifyContent: 'center',
	},
	middleCircle: {
		borderColor: colors.dark_blue,
		borderWidth: 17,
		backgroundColor: 'transparent',
	},
	infoBlock: {
		position: 'absolute',
		zIndex: 30005,
		backgroundColor: 'transparent',
		textAlign: 'center',
	},
	statusText: {
		fontSize: 18,
		fontFamily: fonts.popins,
		color: colors.white,
		...utils.disableFontPadding,
	},
	percents: {
		fontSize: 41,
		fontFamily: fonts.popinsSemiBold,
		color: colors.white,
		...utils.disableFontPadding,
	},
});
