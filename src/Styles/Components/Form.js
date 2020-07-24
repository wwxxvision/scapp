import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common } = variables;
export const formStyles = StyleSheet.create({
	container: {},
	title: (theme) => {
		let themeStyles = null;
		switch (theme) {
			case 'lightBlue':
				themeStyles = {
					color: colors.light_blue,
				};
		}
		return {
			...common.title,
			...utils.disableFontPadding,
			...themeStyles,
		};
	},
	description: (theme) => {
		let themeStyles = null;
		switch (theme) {
			case 'lightBlue':
				themeStyles = {
					color: colors.light_blue,
				};
		}
		return {
			...common.text,
			marginTop: 6,
			...themeStyles,
		};
	},
	block: {
		marginTop: 16,
	},
});
