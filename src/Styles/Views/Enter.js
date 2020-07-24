import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common, breakPoints, container } = variables;
export const enterStyles = StyleSheet.create({
	titlesBlock: {
		marginTop: 30,
	},
	container: (theme) => {
		let themeStyles = theme;
		switch (theme) {
			case 'lightBlue':
				themeStyles = {
					backgroundColor: colors.light_blue,
				};
				break;
		}
		return {
			...utils.flex('column'),
			position: 'relative',
			padding: container.wrapper.padding,
			...themeStyles,
			minHeight: '100%',
		};
	},
	termOfUseBlock: {
		...utils.flex('row'),
	},
	termOfUseText: {
		marginLeft: 7,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
		fontSize: 14,
		color: colors.dark_blue,
		marginTop: -3,
	},
	termOfUseTextLink: {
		marginLeft: 7,
		textDecorationLine: 'underline',
		fontSize: 14,
		fontFamily: fonts.popinsBold,
		color: colors.dark_blue,
		...utils.disableFontPadding,
	},
	forgotPasswordText: {
		color: colors.white,
		fontSize: 14,
		fontFamily: fonts.popins,
		...utils.disableFontPadding,
		textDecorationLine: 'underline',
	},
	submitButton: {
		position: 'absolute',
		width: '100%',
		bottom: container.wrapper.padding,
		left: container.wrapper.padding,
	},
});
