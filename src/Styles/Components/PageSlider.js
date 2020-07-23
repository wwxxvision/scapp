import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common, container } = variables;
export const pageSliderStyles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
	},
	controls: {
		...utils.flex('column'),
		position: 'absolute',
		width: '100%',
		bottom: 0,
	},
	slidesContainer: {
		padding: container.wrapper.padding,
	},
	indicatorsContainer: {
		...utils.flex('row'),
		width: '100%',
	},
	indicator: {
		height: 6,
		width: 6,
		borderRadius: 50,
	},
	slide: (deviceWidth) => ({
		height: '100%',
		width: deviceWidth,
	}),
	getIndicatorMargins: (index) => {
		if (index > 0) {
			return {
				marginLeft: 5,
			};
		}
	},
	getIndicatorsLocation: (location) => {
		switch (location) {
			case 'center':
				return {
					justifyContent: 'center',
				};
		}
	},
	getActiveIndicatorStyles: (isActive) => {
		if (isActive) {
			return {
				width: 22,
			};
		}
	},
	getStylesByThemeIndicator: (theme) => {
		switch (theme) {
			case 'lightBlue':
				return {
					backgroundColor: colors.light_blue,
				};
			case 'white':
				return {
					backgroundColor: colors.white,
				};
		}
	},
});
