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
});
