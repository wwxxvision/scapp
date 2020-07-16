import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import icons from '../Utils/imageExporter';
import CheckBox from './CheckBox';
import { listStyles } from '../../Styles/Components';
import { utils } from '../../Styles/Base';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getIconByName(name, props) {
		let Icon = icons[name];
		return <Icon {...props}></Icon>;
	}

	getListByType(type, elements) {
		switch (type) {
			case 'checkboxes':
				return (
					<ScrollView>
						{elements.map((element) => (
							<View style={listStyles.listItem(type)} key={element.id}>
								<View style={{ ...utils.flex('row'), alignItems: 'center' }}>
									{element.useIcon && (
										<View style={listStyles.iconOverlay}>
											{this.getIconByName(element.iconName, {
												...listStyles.itemIcon,
												position: 'absolute',
											})}
										</View>
									)}
									<Text style={listStyles.itemText}>{element.title}</Text>
								</View>
								<CheckBox />
							</View>
						))}
					</ScrollView>
				);
		}
	}

	render() {
		const { type, elements } = this.props;

		return <>{this.getListByType(type, elements)}</>;
	}
}
