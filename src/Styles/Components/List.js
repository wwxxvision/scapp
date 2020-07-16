import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';
const { colors, fonts } = variables;
const overlayCircleSize = 45;
export const listStyles = StyleSheet.create({
	listItem: (type) => {
		switch (type) {
			case 'radio':
				return {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: 22,
				};
			case 'checkboxes':
				return {
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
     maxWidth: 38,
				};
		}
	},
	itemIcon: {
		height: 40,
		width: 40,
		zIndex: 10,
 },
 itemIconSizeSmall: {
  height: 36,
		width: 36,
 },
 listItemMargin: {
  marginLeft: 10
 },
	iconOverlay: {
		height: overlayCircleSize,
		width: overlayCircleSize,
		backgroundColor: colors.cream,
		borderRadius: 50,
		position: 'relative',
		...utils.flex_centered,
	},
	itemText: (type) => {
		switch (type) {
			case 'radio':
				return {
					fontSize: 17,
					color: colors.light_blue,
					fontFamily: fonts.popins,
					paddingLeft: 16,
				};

			case 'checkboxes':
				return {
					fontSize: 8,
					fontFamily: fonts.popins,
					color: colors.dark_blue,
					marginTop: 8,
					textAlign: 'center',
				};
		}
 },
 itemIconChecked: {
  right: -5,
  top: 2
 }
});
