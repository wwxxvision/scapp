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

	itemIsActive = (item) =>
		this.state.values.find((value) => value.id === item.id);

	selectItem = (item) => {
		const { values } = this.state;
		const itemIsAlreadySelected = values.find((value) => value.id === item.id);
		if (!itemIsAlreadySelected)
			this.setState({
				values: [],
			});

		this.setState({
			values: [item],
		});
	};

	getListByType(type, elements) {
		switch (type) {
			case 'radio':
				return (
					<ScrollView>
						{elements.map((element, index) => {
							const listItemMargins =
								index > 0 ? listStyles.listItemMargin(type) : null;

							return (
								<View
									key={element.id}
									style={{ ...listStyles.listItem(type), ...listItemMargins }}
								>
									<View style={{ ...utils.flex('row'), alignItems: 'center' }}>
										{element.useIcon && (
											<View style={listStyles.iconOverlay}>
												{getIconByName(element.iconName, {
													...listStyles.itemIcon,
													position: 'absolute',
												})}
											</View>
										)}
										<Text style={listStyles.itemText(type)}>
											{element.title}
										</Text>
									</View>
									<TouchableWithoutFeedback
										onPress={() => this.selectItem(element)}
									>
										<View>
											<CheckBox isChecked={() => this.itemIsActive(element)} />
										</View>
									</TouchableWithoutFeedback>
								</View>
							);
						})}
					</ScrollView>
				);
			case 'checkboxes':
				return (
					<ScrollView horizontal={true}>
						{elements.map((element, index) => {
							const listItemMargins =
								index > 0 ? listStyles.listItemMargin(type) : null;
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
													{this.itemIsActive(element) &&
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
