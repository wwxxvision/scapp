import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { checkBoxStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import Done from '../../assets/img/done_icon.svg';

export default function CheckBox({ type, theme, isChecked }) {
	const sizeIcon = type === 'square'  ? {width: 8, height: 8} : null;
	const [stylesWhenChecked, setStylesChecked] = useState(
		isChecked() ? checkBoxStyles.activeStyleByType(type) : null
	);
	const observableIsChecked = () => {
		useEffect(() => {
			setStylesChecked(
				isChecked() ? checkBoxStyles.activeStyleByType(type) : null
			);
		}, [isChecked]);
	};
	
	observableIsChecked();
	return (
		<>
				<View
					style={{
						...checkBoxStyles.container,
						...checkBoxStyles[theme],
						...checkBoxStyles[type],
						...stylesWhenChecked,
					}}
				>
					{isChecked() && (
						<View style={checkBoxStyles.checked}>
							<Done {...sizeIcon} />
						</View>
					)}
				</View>
		</>
	);
}

CheckBox.defaultProps = {
	theme: 'lightBlue',
	type: 'circle',
};

CheckBox.PropsTypes = {
	theme: PropsTypes.string,
	type: PropsTypes.string,
	isChecked: PropsTypes.boolean
};
