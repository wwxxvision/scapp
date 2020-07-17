import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const tagStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 31,
		paddingVertical: 10,
		...utils.flex_centered,
		borderRadius: 9,
	},
	wildSand: {
		backgroundColor: colors.wildSand,
	},
	tagText: {
		...common.text,
	},
});
