import { variables } from './variables';

export const utils = {
	flex_centered: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	getHexColorByTheme: (theme) => {
		switch (theme) {
			case 'white':
				return variables.colors.white;
			case 'darkBlue':
				return variables.colors.dark_blue;

			default:
				return variables.colors.white;
		}
	},
	disableFontPadding: {
		includeFontPadding: false,
	},
};
