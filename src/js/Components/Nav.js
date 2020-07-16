import React, { Component } from 'react';
import { ROUTER } from '../router';
import { View, Text } from 'react-native';
import getIconByName from '../Utils/getIconByName';

export default class Nav extends Component {
	render() {
		return (
			<>
				{ROUTER.map((route, index) => {
					return (
						<View key={index}>
							{getIconByName(route.iconName)}
							<Text>{route.name}</Text>
						</View>
					);
				})}
			</>
		);
	}
}
