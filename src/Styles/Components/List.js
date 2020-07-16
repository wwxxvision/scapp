import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';
const { colors, fonts } = variables;
const overlayCircleSize = 45;
export const listStyles = StyleSheet.create({
	listItem: (type, index) => {
		switch (type) {
			case 'radio':
				return {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
     justifyContent: 'space-between',
     marginTop: 22
				};
		}
 },
 itemIcon: {
  height: 40,
  width: 40,
  zIndex: 10,
 },
 iconOverlay: {
  height: overlayCircleSize,
  width: overlayCircleSize,
  backgroundColor: colors.cream,
  borderRadius: 50,
  position: 'relative',
  ...utils.flex_centered
 },
 itemText: {
  fontSize: 17,
  color: colors.light_blue,
  fontFamily: fonts.popins,
  paddingLeft: 16
 }
 
});
