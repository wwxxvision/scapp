import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors } = variables;
export const headerStyles = StyleSheet.create({
	container: (type) => {
		switch (type) {
			case 'route':
				return {
					width: '100%',
					paddingVertical: 34,
				};
		}
	},
	lightBlue: {
		backgroundColor: colors.light_blue,
	},
});
