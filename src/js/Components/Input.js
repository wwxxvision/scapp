import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { inputStyles } from '../../Styles/Components/';
import PropsTypes from 'prop-types';
import icons from '../Utils/imageExporter';
import { utils } from '../../Styles/Base/utils';
import CountryPicker from 'react-native-country-picker-modal';
import getIconByName from '../Utils/getIconByName';

export default function Input({
	label,
	icon,
	theme,
	type,
	placeholder,
	labelTheme,
	action,
}) {
	const [privateInfoIsShowing, toggleForShowPrivateInfo] = useState(false);
	const inputIsPrivate = type === 'private';
	const getInputByType = () => {
		switch (type) {
			case 'private':
			case 'text':
				return (
					<TextInput
						placeholder={placeholder}
						secureTextEntry={inputIsPrivate && !privateInfoIsShowing}
						style={{ ...inputStyles.input, ...inputStyles[theme] }}
					/>
				);
			case 'phone':
				return <CountryPicker {...{ withCallingCode: true, withFlag: false }} />;
		}
	};

	return (
		<View>
			<View style={inputStyles.inputLabel}>
				{icon && (
					<View>
						{getIconByName(icon, {
							...inputStyles.labelIcon,
							stroke: utils.getHexColorByTheme(labelTheme),
						})}
					</View>
				)}
				<Text
					style={{
						...inputStyles.labelText,
						color: utils.getHexColorByTheme(labelTheme),
					}}
				>
					{label}
				</Text>
			</View>
			<View style={inputStyles.inputWrapper}>
				{getInputByType()}
				{inputIsPrivate && (
					<View style={inputStyles.inputPrivateTogglerIcon}>
						{getIconByName('oko')}
					</View>
				)}
			</View>
		</View>
	);
}

Input.defaultProps = {
	type: 'text',
	theme: 'cream',
};

Input.PropsTypes = {
	type: PropsTypes.string,
	theme: PropsTypes.string,
	icon: PropsTypes.string,
	placeholder: PropsTypes.string,
	action: PropsTypes.func,
};
