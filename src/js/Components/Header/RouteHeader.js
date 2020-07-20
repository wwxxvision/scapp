import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../../Utils/getIconByName';

export default class RouteHeader extends Component {
	render() {
		const { type, headerStyles, theme, isGoBack, title } = this.props;
		return (
			<View style={{ ...headerStyles.container(type), ...headerStyles[theme] }}>
				{isGoBack ? (
					<TouchableWithoutFeedback>
						{getIconByName('arrowBack')}
					</TouchableWithoutFeedback>
				) : (
					<View></View>
				)}
				<Text style={headerStyles.headerTitle}>{title}</Text>
				{getIconByName('settings')}
			</View>
		);
	}
}

RouteHeader.defaultProps = {
	isGoBack: false,
	type: 'route',
	theme: 'lightBlue',
};

RouteHeader.PropsTypes = {
	isGoBack: PropsTypes.boolean,
	type: PropsTypes.string,
	theme: PropsTypes.string,
	title: PropsTypes.string,
	headerStyles: PropsTypes.object,
};
