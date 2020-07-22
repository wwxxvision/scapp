import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors, fonts, common, container } = variables;
export const pageSliderStyles = StyleSheet.create({
	container: {
		height: '100%',
		flex: 1,
	},
	controls: {
		...utils.flex('column'),
		position: 'absolute',
		width: '100%',
		bottom: container.wrapper.padding,
	},
	indicatorsContainer: {
		...utils.flex('row'),
		width: '100%',
	},
	indicator: {
		height: 6,
		width: 6,
		backgroundColor: colors.light_blue,
		borderRadius: 50,
	},
	slidesContainer: {
		width: '100%',
		...utils.flex('row'),
	},
	slide: {
		width: '100%',
	},
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
});
