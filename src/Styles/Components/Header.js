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
		}
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
