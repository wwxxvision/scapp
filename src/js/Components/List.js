import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import CheckBox from './CheckBox';
import { listStyles } from '../../Styles/Components';
import { utils } from '../../Styles/Base';
import getIconByName from '../Utils/getIconByName';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [],
		};
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
											{getIconByName(element.iconName, {
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
							const listItemMargins =
								index > 0 ? listStyles.listItemMargin : null;
							return (
								<View
									style={{ ...listStyles.listItem(type), ...listItemMargins }}
									key={element.id}
								>
									{element.useIcon && (
										<>
											<View>
												{getIconByName(
													element.iconName,
													listStyles.itemIconSizeSmall
												)}
												{getIconByName('checked', {
													style: {
														position: 'absolute',
														...listStyles.itemIconChecked,
													},
												})}
											</View>
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
