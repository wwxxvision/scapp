import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
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

	checkedItem = (item) => {
		const { values } = this.state;
		const itemIsAlreadyChecked = values.find((value) => value.id === item.id);
		console.log(itemIsAlreadyChecked);
		if (itemIsAlreadyChecked) {
			this.setState({
				values: values.filter((value) => value.id !== item.id),
			});
		} else {
			this.setState({
				values: [...values, item],
			});
		}
	};

	itemIsChecked = (item) =>
		this.state.values.find((value) => value.id === item.id);

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
								<TouchableWithoutFeedback
									key={element.id}
									onPress={() => this.checkedItem(element)}
								>
									<View
										style={{ ...listStyles.listItem(type), ...listItemMargins }}
									>
										{element.useIcon && (
											<>
												<View>
													{getIconByName(
														element.iconName,
														listStyles.itemIconSizeSmall
													)}
													{this.itemIsChecked(element) &&
														getIconByName('checked', {
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
								</TouchableWithoutFeedback>
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
