import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { menuStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';

export default class Menu extends Component {
	render() {
		const { tabs } = this.props;
		return (
			<View>
				{tabs.map((tab, index) => {
					return (
						<TouchableWithoutFeedback key={index}>
							<View
								style={{
									...menuStyles.tabContainer,
									...menuStyles.getTabMargins(index),
								}}
							>
								{getIconByName(tab.icon, { heigth: 20, width: 25 })}
								<Text style={menuStyles.tabTitle}>{tab.title}</Text>
							</View>
						</TouchableWithoutFeedback>
					);
				})}
			</View>
		);
	}
}

Menu.PropsTypes = {
	tabs: PropsTypes.array.isRequired,
};
