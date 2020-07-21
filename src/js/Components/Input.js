import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { inputStyles } from '../../Styles/Components/';
import PropsTypes from 'prop-types';
import icons from '../Utils/imageExporter';
import { utils } from '../../Styles/Base/utils';
import CountryPicker from 'react-native-country-picker-modal';
import getIconByName from '../Utils/getIconByName';

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
		},
		ref
	) => {
		const [privateInfoIsShowing, toggleForShowPrivateInfo] = useState(false);
		const [value, setValue] = useState(null);
		const inputIsPrivate = type === 'private';
		const getInputByType = () => {
			const invalidStyles = isInvalid ? inputStyles.invalid : null;
			switch (type) {
				case 'private':
				case 'text':
					return (
						<TextInput
							ref={ref}
							{...customProps}
							maxLength={maxLength}
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
				case 'number':
					return (
						<TextInput
							ref={ref}
							{...customProps}
							keyboardType="numeric"
							maxLength={maxLength}
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
);

Input.defaultProps = {
	type: 'text',
	theme: 'cream',
};

Input.PropsTypes = {
	type: PropsTypes.string,
	theme: PropsTypes.string,
	icon: PropsTypes.string,
	isInvalid: PropsTypes.boolean,
	editable: PropsTypes.boolean,
	customStyles: PropsTypes.object,
	customProps: PropsTypes.object,
	placeholder: PropsTypes.string,
	maxLength: PropsTypes.number,
	action: PropsTypes.func,
};

export default Input;
