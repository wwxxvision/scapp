import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { inputStyles } from '../Styles/Components/';
import PropsTypes from 'prop-types';
import icons from '../Utils/imageExporter';
import { utils } from '../../Styles/Base/utils';

export default function Input({
	label,
	icon,
	theme,
	type,
	placeholder,
	labelTheme,
	action,
}) {
	const [privateInfoIsShowing, toggleShowingPrivateInfo] = useState(false);
	const inputIsPrivate = type === 'private';
	return (
		<View>
			<View style={inputStyles.inputLabel}>
				{icon && (
					<Image
						source={icons[icon]}
						style={{
							...inputStyles.labelIcon,
							fill: utils.getHexColorByTheme(labelTheme),
						}}
					/>
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
				<TextInput
					placeholder={placeholder}
					secureTextEntry={inputIsPrivate && !privateInfoIsShowing}
					style={{ ...inputStyles.input, ...inputStyles[theme] }}
				/>
				{inputIsPrivate && (
					<Image
						source={icons.oko}
						style={inputStyles.inputPrivateTogglerIcon}
					/>
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
