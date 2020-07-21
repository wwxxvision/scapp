import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts } = variables;
const padding_top_bottom = 10;
const padding_left_right = 10;
const inputHeight = 40;
const iconSize = 13;
export const inputStyles = StyleSheet.create({
	inputLabel: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 3,
	},
	inputWrapper: {
		position: 'relative',
		height: inputHeight,
		width: '100%',
		marginTop: 10,
	},
	input: {
		height: inputHeight,
		width: '100%',
		borderRadius: 5,
		paddingVertical: padding_top_bottom,
		paddingLeft: padding_left_right,
		paddingRight: padding_left_right + iconSize + 2,
		fontFamily: fonts.popins,
		fontSize: 14,
	},
	cream: {
		backgroundColor: colors.cream,
	},
	labelText: {
		fontSize: 14,
		fontFamily: fonts.popins,
		marginLeft: 10,
		display: 'flex',
		height: 'auto',
		...utils.disableFontPadding,
	},
	labelIcon: {
		height: iconSize,
		width: iconSize,
	},
	inputPrivateTogglerIcon: {
		position: 'absolute',
		top: '50%',
		right: padding_left_right,
		transform: [{ translateY: -inputHeight / 2 + iconSize }],
	},
	invalid: {
		borderWidth: 1,
		borderColor: colors.red,
	},
});
