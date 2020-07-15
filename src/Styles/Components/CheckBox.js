import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors } = variables;
export const checkBoxStyles = StyleSheet.create({
	container: {
    position: 'relative',
    ...utils.flex_centered
	},
	circle: {
		borderRadius: 50,
    borderWidth: 1,
    height: 32,
    width: 32,
  },
  square: {
    height: 13,
    width: 13,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.dark_blue,
  },
	lightBlue: {
    borderColor: colors.light_blue,
  },
  checked: {
    position: 'absolute'
  },  
	activeStyleByType: (type) => {
		switch (type) {
			case 'circle':
				return {
					backgroundColor: colors.green,
        };
      case 'square':
        return {
          backgroundColor: colors.dark_blue,
        }
			default:
				return {
					backgroundColor: colors.green,
				};
		}
	},
});
