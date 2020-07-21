import React, { Component } from 'react';
import { stepTabsStyles } from '../../Styles/Components';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';

export default class StepTabs extends Component {
	render() {
		const { tabs } = this.props;
		return (
			<View>
				{tabs.map((tab, index) => {
					return (
						<View
							style={{
								...stepTabsStyles.tabContainer,
								...stepTabsStyles.getTabMargins(index),
							}}
							key={index}
						>
							{getIconByName(tab.icon, { heigth: 25, width: 25 })}
							<View style={stepTabsStyles.tabContent}>
								<View>
									<Text style={stepTabsStyles.tabTitle}>{tab.title}</Text>
									<Text style={stepTabsStyles.tabDescription}>{tab.description}</Text>
								</View>
								<TouchableWithoutFeedback>
									{getIconByName('arrowRight', { width: 7, heigth: 13 })}
								</TouchableWithoutFeedback>
							</View>
						</View>
					);
				})}
			</View>
		);
	}
}

StepTabs.PropsTypes = {
	tabs: PropsTypes.array.isRequired,
};
