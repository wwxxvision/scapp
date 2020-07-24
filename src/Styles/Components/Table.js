import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const tableStyles = StyleSheet.create({
	container: {
		...utils.flex('column'),
		width: '100%',
	},
	row: {
		...utils.flex('row'),
		width: '100%',
	},
	rowItem: {
		paddingBottom: 9,
		borderBottomWidth: 1,
		borderBottomColor: colors.mouse,
	},
	rowItemPadding: {
		paddingVertical: 16,
	},
	getFlexGrow: (index) => {
		if (index === 0) {
			return {
				flexGrow: 2,
			};
		} else {
			return {
				flexGrow: 1,
			};
		}
	},
	getTextAlign: (index) => {
		if (index > 0) {
			return {
				textAlign: 'right',
			};
		}
	},
	getDataRowText: (index) => {
		const common = {
			fontSize: 14,
			color: colors.dark_blue,
		};
		if (index === 0) {
			return {
				...common,
				fontFamily: fonts.popinsSemiBold,
			};
		} else {
			return {
				...common,
				fontFamily: fonts.popins,
			};
		}
	},
	headerText: {
		fontFamily: fonts.popins,
		fontSize: 14,
		lineHeight: 21,
		color: colors.light_blue,
	},
});
