import React from 'react';
import Slider from '@react-native-community/slider';
import { rangeStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import { variables } from '../../Styles/Base';

export default function Range({ min, max }) {
	return (
		<>
			<Slider
				style={rangeStyles.container}
				minimumValue={min}
				maximumValue={max}
				thumbTintColor={variables.colors.light_blue}
			/>
		</>
	);
}

Button.PropsTypes = {
	min: PropsTypes.number.isRequired,
	max: PropsTypes.number.isRequired,
};
