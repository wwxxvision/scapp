import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const menuStyles = StyleSheet.create({
	tabContainer: {
		...utils.flex('row'),
		alignItems: 'center',
	},
	tabTitle: {
		fontSize: 20,
		fontFamily: fonts.popins,
		color: colors.dark_blue,
		marginLeft: 20,
		...utils.disableFontPadding,
	},
	getTabMargins: (index) => {
		if (index > 0) {
			return {
				marginTop: 45,
			};
		}
	},
});
