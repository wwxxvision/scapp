import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const stepTabsStyles = StyleSheet.create({
	tabContainer: {
		...utils.flex('row'),
	},
	tabContent: {
		...utils.flex('row'),
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		marginLeft: 14,
	},
	tabTitle: {
		fontSize: 16,
		fontFamily: fonts.popinsBold,
		color: colors.dark_blue,
		...utils.disableFontPadding,
	},
	tabDescription: {
		fontSize: 12,
		fontFamily: fonts.popins,
		color: colors.dark_blue,
		...utils.disableFontPadding,
		lineHeight: 18,
	},
	getTabMargins: (index) => {
		if (index > 0) {
			return {
				marginTop: 35,
			};
		}
	},
});
