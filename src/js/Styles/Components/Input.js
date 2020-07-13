import { variables } from '../Base/index';
import { StyleSheet } from 'react-native';

const { colors, fonts } = variables;
const padding_top_bottom = 10;
const padding_left_right = 10;
export const inputStyles = StyleSheet.create({
	inputLabel: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	inputWrapper: {
		position: 'relative',
		height: 40,
		width: '100%',
	},
	input: {
		height: '100%',
		width: '100%',
		borderRadius: 5,
		paddingHorizontal: padding_left_right,
		paddingVertical: padding_top_bottom,
		fontFamily: fonts.popins,
		fontSize: 14,
	},
	cream: {
		backgroundColor: colors.cream,
	},
});
