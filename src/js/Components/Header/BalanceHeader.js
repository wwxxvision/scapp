import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../../Utils/getIconByName';

export default class BalanceHeader extends Component {
	render() {
		const { type, headerStyles, theme, data } = this.props;
		return (
			<View style={{ ...headerStyles.container(type), ...headerStyles[theme] }}>
				{data.map((_data) => (
					<View style={headerStyles.balanceItem}>
						<Text style={headerStyles.balanceTitle}>{_data.title}</Text>
						<Text style={headerStyles.balanceValue}>{_data.value}</Text>
					</View>
				))}
				{getIconByName('settings')}
			</View>
		);
	}
}

BalanceHeader.defaultProps = {
	type: 'route',
	theme: 'lightBlue',
};

BalanceHeader.PropsTypes = {
	type: PropsTypes.string,
	theme: PropsTypes.string,
	headerStyles: PropsTypes.object,
	data: PropsTypes.array,
};
