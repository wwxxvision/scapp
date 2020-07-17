import React from 'react';
import { rangeStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function Range({ min, max, layoutWidth }) {
	return (
		<>
			<MultiSlider
				container={rangeStyles.container}
				trackStyle={rangeStyles.track}
				markerStyle={rangeStyles.marker}
				selectedStyle={rangeStyles.selected}
				unselectedStyle={rangeStyles.unselected}
				min={min}
				max={max}
				sliderLength={layoutWidth}
			/>
		</>
	);
}

Range.PropsTypes = {
	min: PropsTypes.number.isRequired,
	max: PropsTypes.number.isRequired,
	layoutWidth: PropsTypes.number.isRequired,
};
