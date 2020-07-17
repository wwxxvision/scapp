import React, { Component } from 'react';
import { ROUTER } from '../router';
import { View, Text } from 'react-native';
import getIconByName from '../Utils/getIconByName';
import { navStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';

export default class Nav extends Component {
	render() {
		const { theme } = this.props;
		return (
			<View style={{ ...navStyles.container, ...navStyles[theme] }}>
				{ROUTER.map((route, index) => {
					const isActiveTab = index === 0;
					let activeNavItem = isActiveTab ? navStyles.activeNavItem : null;
					return (
						<View style={{ ...navStyles.navItem, ...activeNavItem }} key={index}>
							{getIconByName(route.iconName, navStyles.navIcon)}
							<Text style={navStyles.navTitle}>{route.name}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

Nav.defaultProps = {
	theme: 'white',
};

Nav.PropsTypes = {
	theme: PropsTypes.string,
};
