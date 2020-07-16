import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors } = variables;
export const navStyles = StyleSheet.create({
	container: {
		height: 77,
		width: '100%',
		...utils.flex('row'),
	},
});
