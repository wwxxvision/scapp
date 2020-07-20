import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../../Utils/getIconByName';

export default class TabHeader extends Component {
	render() {
		const { type, headerStyles, theme, tabs } = this.props;
		return (
			<View style={{ ...headerStyles.container(type), ...headerStyles[theme] }}>
				{getIconByName('settings', { style: headerStyles.settingsIconStickyLeft })}
				<View style={headerStyles.tabs}>
					{tabs.map((tab, index) => {
						const activeTab = index === 0 ? headerStyles.tabBlockIsActive : null;
						return (
							<TouchableWithoutFeedback key={index}>
								<View style={{ ...headerStyles.tabBlock, ...activeTab }}>
									<Text style={headerStyles.tabTitle}>{tab.title}</Text>
								</View>
							</TouchableWithoutFeedback>
						);
					})}
				</View>
			</View>
		);
	}
}

TabHeader.PropsTypes = {
	type: PropsTypes.string,
	theme: PropsTypes.string,
	headerStyles: PropsTypes.object,
	tabs: PropsTypes.array,
};
