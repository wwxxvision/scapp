import React from 'react';
import { View, Text } from 'react-native';
import { buttonStyles } from '../../Styles/Components/';
import PropsTypes from 'prop-types';

export default function Button({ title, theme, size, content, action }) {
	return (
		<View
			style={{
				...buttonStyles.container,
				...buttonStyles[theme],
				...buttonStyles[size],
			}}
		>
			{title && (
				<Text
					style={{
						...buttonStyles.buttonTitle,
						color: buttonStyles[theme].color,
					}}
				>
					{title}
				</Text>
			)}
			{content && <content />}
		</View>
	);
}

Button.defaultProps = {
	theme: 'darkBlue',
	size: 'big',
};

Button.PropsTypes = {
	title: PropsTypes.string,
	theme: PropsTypes.string,
	size: PropsTypes.string,
	content: PropsTypes.func,
	action: PropsTypes.func,
};
