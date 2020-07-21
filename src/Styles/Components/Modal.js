import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const modalStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 19,
		paddingVertical: 30,
		backgroundColor: colors.white,
		borderRadius: 10,
	},
	modalHeader: {
		...utils.flex('row'),
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 20,
		fontFamily: fonts.popinsSemiBold,
		color: colors.dark_blue,
		...utils.disableFontPadding,
	},
	modalLabel: {
		marginTop: 10,
	},
	labelText: {
		...common.text,
	},
});
