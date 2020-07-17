import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../../Utils/getIconByName';

export default class RouteHeader extends Component {
	render() {
		const { type, headerStyles, theme } = this.props;
		return (
			<View
				style={{ ...headerStyles.container(type), ...headerStyles[theme] }}
			></View>
		);
	}
}
