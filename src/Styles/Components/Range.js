import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors } = variables;
export const rangeStyles = StyleSheet.create({
	container: {
		width: '100%',
	},
	track: {
		height: 6,
		borderRadius: 4,
		width: '100%',
	},
	marker: {
		marginTop: 4,
		backgroundColor: colors.light_blue,
		height: 23,
		width: 23,
	},
	selected: {
		backgroundColor: colors.dark_blue,
	},
	unselected: {
		backgroundColor: colors.dark_blue,
		opacity: 0.4,
	},
});
