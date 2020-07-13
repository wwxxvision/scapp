import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { inputStyles } from '../Styles/Components/';
import PropsTypes from 'prop-types';

export default function Input({ label, icon, theme, type, placeholder }) {
	return (
		<View>
			<View style={inputStyles.inputLabel}>
				<View>{icon}</View>
				<Text>{label}</Text>
			</View>
			<View style={inputStyles.inputWrapper}>
				<TextInput
					placeholder={placeholder}
					secureTextEntry={type === 'private'}
					style={{ ...inputStyles.input, ...inputStyles[theme] }}
				/>
			</View>
		</View>
	);
}

// Button.defaultProps = {

// };

// Button.PropsTypes = {

// };
