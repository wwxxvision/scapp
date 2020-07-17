import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts } = variables;
export const listStyles = StyleSheet.create({
	listItem: {
		...utils.flex('row'),
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 14,
	},
	setBorder: (isLastElement) => {
		if (!isLastElement) {
			return {
				borderTopColor: colors.wildSand,
				borderTopWidth: 1,
			};
		}

		return {
			borderTopColor: colors.wildSand,
			borderTopWidth: 1,
			borderBottomColor: colors.wildSand,
			borderBottomWidth: 1,
		};
	},
	dataUser: {
		...utils.flex('row'),
		alignItems: 'center',
	},
	iconUser: {
		height: 54,
		width: 54,
		backgroundColor: colors.wildSand,
		borderRadius: 50,
		position: 'relative',
		...utils.flex_centered,
	},
	listItemTextBlock: {
		marginLeft: 11,
	},
	textBlockName: {
		fontSize: 17,
		fontFamily: fonts.popins,
		color: colors.dark_blue,
		lineHeight: 26,
	},
	textBlockStatus: {
		fontSize: 12,
		fontFamily: fonts.popins,
		color: colors.light_blue,
		lineHeight: 18,
	},
	listItemEndTextBlock: {
		...utils.flex('row'),
		alignItems: 'center',
	},
	endTextBlock: {
		fontSize: 17,
		fontFamily: fonts.popinsSemiBold,
	},
	increase: {
		color: colors.dark_blue,
	},
	decrease: {
		color: colors.red,
	},
});
