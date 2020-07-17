import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, container } = variables;
export const navStyles = StyleSheet.create({
	container: {
		height: 77,
		width: '100%',
		...utils.flex('row'),
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: container.wrapper.padding,
		position: 'absolute',
		bottom: 0,
		elevation: 20,
	},
	navIcon: {
		width: 28,
		height: 25,
	},
	navItem: {
		...utils.flex('column'),
		alignItems: 'center',
		opacity: 0.2,
	},
	activeNavItem: {
		opacity: 1,
	},
	navTitle: {
		fontFamily: fonts.popins,
		fontSize: 9,
		color: colors.dark_blue,
		marginTop: 10,
	},
	white: {
		backgroundColor: colors.white,
	},
});
