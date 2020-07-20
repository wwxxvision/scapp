import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const progressStyles = StyleSheet.create({
	circle: {
		height: 200,
		width: 200,
		backgroundColor: colors.black,
		borderRadius: 100,
		position: 'relative',
		overflow: 'hidden',
	},
	mask: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
});
