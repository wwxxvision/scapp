import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const cardStyles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 11,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: colors.mercury,
	},
	cardTitle: {
		fontFamily: fonts.popinsSemiBold,
		fontSize: 14,
		color: colors.dark_blue,
	},
	cardText: {
		...common.text,
		marginTop: 10,
	},
	cardLessButton: {
		...utils.flex('row'),
		alignItems: 'center',
		marginTop: 13,
	},
	ButtonText: {
		...common.text,
		color: colors.light_blue,
		textDecorationLine: 'underline',
	},
});
