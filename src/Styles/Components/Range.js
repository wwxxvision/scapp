import { variables, utils } from '../Base/';
import { StyleSheet } from 'react-native';

const { colors } = variables;
export const rangeStyles = StyleSheet.create({
	container: {
    position: 'relative',
    ...utils.flex_centered
	},
});
