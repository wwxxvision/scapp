import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, container, fonts } = variables;
export const headerStyles = StyleSheet.create({
	container: (type) => {
		switch (type) {
			case 'route':
				return {
					width: '100%',
					paddingVertical: 34,
					paddingHorizontal: container.wrapper.padding,
					...utils.flex('row'),
					justifyContent: 'space-between',
					alignItems: 'center',
				};
			case 'balance':
				return {
					width: '100%',
					paddingTop: 34,
					paddingBottom: 15,
					paddingHorizontal: container.wrapper.padding,
					...utils.flex('row'),
					alignItems: 'center',
					justifyContent: 'space-between',
				};
			case 'tab':
				return {
					width: '100%',
					paddingTop: 34,
					paddingHorizontal: container.wrapper.padding,
				};
		}
	},
	balanceData: {
		...utils.flex('row'),
	},
	balanceItem: {},
	balanceTitle: {
		fontSize: 14,
		color: colors.white,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
	},
	balanceValue: {
		fontSize: 27,
		fontFamily: fonts.popinsSemiBold,
		color: colors.white,
		...utils.disableFontPadding,
	},
	headerTitle: {
		fontSize: 18,
		color: colors.white,
		fontFamily: fonts.popins,
		lineHeight: 27,
		...utils.disableFontPadding,
	},
	lightBlue: {
		backgroundColor: colors.light_blue,
	},
	settingsIconStickyLeft: {
		marginLeft: 'auto',
		width: '100%',
	},
	tabs: {
		...utils.flex('row'),
		justifyContent: 'space-between',
	},
	tabBlock: {
		marginTop: 10,
		opacity: 0.5,
	},
	tabBlockIsActive: {
		borderBottomColor: colors.white,
		borderBottomWidth: 3,
		opacity: 1,
	},
	tabTitle: {
		fontSize: 18,
		color: colors.white,
		fontFamily: fonts.popins,
		paddingBottom: 12,
		...utils.disableFontPadding,
		paddingHorizontal: 9,
		lineHeight: 27,
	},
});
