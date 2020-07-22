import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { inputStyles } from '../../Styles/Components/';
import PropsTypes from 'prop-types';
import { utils } from '../../Styles/Base/utils';
import getIconByName from '../Utils/getIconByName';
import Flag from 'react-native-flags';
import CountryCodeList from 'react-native-country-code-list';

const countries = require('../Store/countries.json');

const Input = React.forwardRef(
	(
		{
			label,
			icon,
			theme,
			type,
			placeholder,
			labelTheme,
			action,
			maxLength,
			customStyles,
			customProps,
			isInvalid,
			editable,
			keyboardType,
			initialCountry,
		},
		ref
	) => {
		const [privateInfoIsShowing, toggleForShowPrivateInfo] = useState(false);
		const [value, setValue] = useState(null);
		const [selectedCountry, selecCountry] = useState(initialCountry);
		const inputIsPrivate = type === 'private';

		const getInputByType = () => {
			const invalidStyles = isInvalid ? inputStyles.invalid : null;
			switch (type) {
				case 'private':
				case 'text':
				case 'number':
					return (
						<TextInput
							ref={ref}
							{...customProps}
							maxLength={maxLength}
							keyboardType={keyboardType}
							placeholder={placeholder}
							onKeyPress={({ nativeEvent }) => {
								if (nativeEvent.key === 'Backspace' && action.backspace)
									action.backspace(customProps);
							}}
							onChangeText={(value) => {
								if (action.change) {
									action.change(value, customProps);
								}
								setValue(value);
							}}
							onFocus={(ev) => (action.focus ? action.focus(ev, customProps) : null)}
							secureTextEntry={inputIsPrivate && !privateInfoIsShowing}
							style={{
								...inputStyles.input,
								...inputStyles[theme],
								...customStyles,
								...invalidStyles,
							}}
							editable={editable}
						/>
					);
				case 'phone':
					return (
						<View style={inputStyles.inputPhoneContainer}>
							<View style={inputStyles.inputCountryContainer}>
								<Flag
									type="flat"
									style={inputStyles.flagStyle}
									code={selectedCountry}
								/>
								<Text></Text>
							</View>
							<TextInput
								style={{
									...inputStyles.input,
									...inputStyles[theme],
									...customStyles,

									...invalidStyles,
								}}
							/>
						</View>
					);
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
);

Input.defaultProps = {
	type: 'text',
	theme: 'cream',
	keyboardType: 'default',
	action: {},
	initialCountry: 'US',
};

Input.PropsTypes = {
	type: PropsTypes.string,
	theme: PropsTypes.string,
	icon: PropsTypes.string,
	initialCountry: PropsTypes.string,
	keyboardType: PropsTypes.string,
	isInvalid: PropsTypes.boolean,
	editable: PropsTypes.boolean,
	customStyles: PropsTypes.object,
	customProps: PropsTypes.object,
	placeholder: PropsTypes.string,
	maxLength: PropsTypes.number,
	action: PropsTypes.object,
};

export default Input;
