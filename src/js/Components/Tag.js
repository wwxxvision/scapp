import React from 'react';
import { View, Text } from 'react-native';
import { tagStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';

export default function Tag({ text, theme }) {
	return (
		<View style={{ ...tagStyles.container, ...tagStyles[theme] }}>
			<Text style={tagStyles.tagText}>{text}</Text>
		</View>
	);
}

Tag.defaultProps = {
	theme: 'wildSand',
};

Tag.PropsTypes = {
	theme: PropsTypes.string,
	text: PropsTypes.string,
};
