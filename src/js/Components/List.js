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
		return <Icon {...props} />;
	}

	getListByType(type, elements) {
		switch (type) {
			case 'radio':
				return (
					<ScrollView>
						{elements.map((element) => (
							<View style={listStyles.listItem(type)} key={element.id}>
								<View style={{ ...utils.flex, alignItems: 'center' }}>
									{element.useIcon && (
										<View style={listStyles.iconOverlay}>
											{this.getIconByName(element.iconName, {
												...listStyles.itemIcon,
												position: 'absolute',
											})}
										</View>
									)}
									<Text style={listStyles.itemText(type)}>{element.title}</Text>
								</View>
								<CheckBox />
							</View>
						))}
					</ScrollView>
				);
			case 'checkboxes':
				return (
					<ScrollView horizontal={true}>
						{elements.map((element, index) => {
							const itemHasMargin =
								index > 0 ? listStyles.listItemMargin : null;
							return (
								<View
									style={{ ...listStyles.listItem(type), ...itemHasMargin }}
									key={element.id}
								>
									{element.useIcon && (
										<>
											<View>{this.getIconByName(element.iconName)}</View>
											<Text style={listStyles.itemText(type)}>
												{element.title}
											</Text>
										</>
									)}
								</View>
							);
						})}
					</ScrollView>
				);
		}
	}

	render() {
		const { type, elements } = this.props;

		return <>{this.getListByType(type, elements)}</>;
	}
}
