import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { checkBoxStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import Done from '../../assets/img/done_icon.svg';

export default function CheckBox({ type, theme, initialValue }) {
	const defaultValue = initialValue ? initialValue : false;
	const [isChecked, setChecked] = useState(defaultValue);
	const sizeIcon = type === 'square'  ? {width: 8, height: 8} : null;
	const [stylesWhenChecked, setStylesChecked] = useState(
		isChecked ? checkBoxStyles.activeStyleByType(type) : null
	);
	const checking = () => {
		setChecked(!isChecked);
	};
	const observableIsChecked = () => {
		useEffect(() => {
			setStylesChecked(
				isChecked ? checkBoxStyles.activeStyleByType(type) : null
			);
		}, [isChecked]);
	};

	observableIsChecked();
	return (
		<>
			<TouchableOpacity onPress={() => checking()}>
				<View
					style={{
						...checkBoxStyles.container,
						...checkBoxStyles[theme],
						...checkBoxStyles[type],
						...stylesWhenChecked,
					}}
				>
					{isChecked && (
						<View style={checkBoxStyles.checked}>
							<Done {...sizeIcon} />
						</View>
					)}
				</View>
			</TouchableOpacity>
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
};
