import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const switchStyles = StyleSheet.create({
	container: {
		width: '100%',
		...utils.flex('row'),
		justifyContent: 'space-between',
		borderRadius: 23,
	},
	getSwitchByTheme: (theme) => {
		switch (theme) {
			case 'selago':
				return {
					backgroundColor: colors.selago,
				};
		}
	},
	element: {
		paddingHorizontal: 24,
		paddingVertical: 10,
	},
	textElement: {
		color: colors.light_blue,
		fontSize: 13,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
	},
	activeElement: {
		borderRadius: 23,
		backgroundColor: colors.dark_blue,
	},
	activeText: {
		color: colors.white,
		fontFamily: fonts.popinsBold,
	},
});
