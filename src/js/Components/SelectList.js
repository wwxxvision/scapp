import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import CheckBox from './CheckBox';
import { selectListStyles } from '../../Styles/Components';
import { utils } from '../../Styles/Base';
import getIconByName from '../Utils/getIconByName';
import PropsTypes from 'prop-types';

export default class SelectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [],
		};
	}

	initValues() {
		if (this.props.initValue)
			this.setState({
				values: this.props.initValue,
			});
	}

	componentDidMount() {
		this.initValues();
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

	getSelectListByType(type, elements) {
		switch (type) {
			case 'radio':
				return (
					<ScrollView>
						{elements.map((element, index) => {
							const listItemMargins =
								index > 0 ? selectListStyles.listItemMargin(type) : null;

							return (
								<View
									key={element.id}
									style={{ ...selectListStyles.listItem(type), ...listItemMargins }}
								>
									<View style={{ ...utils.flex('row'), alignItems: 'center' }}>
										{element.useIcon && (
											<View style={selectListStyles.iconOverlay}>
												{getIconByName(element.iconName, {
													...selectListStyles.itemIcon,
													position: 'absolute',
												})}
											</View>
										)}
										<Text style={selectListStyles.itemText(type)}>{element.title}</Text>
									</View>
									<TouchableWithoutFeedback onPress={() => this.selectItem(element)}>
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
								index > 0 ? selectListStyles.listItemMargin(type) : null;
							return (
								<TouchableWithoutFeedback
									key={element.id}
									onPress={() => this.checkedItem(element)}
								>
									<View
										style={{ ...selectListStyles.listItem(type), ...listItemMargins }}
									>
										{element.useIcon && (
											<>
												<View>
													{getIconByName(
														element.iconName,
														selectListStyles.itemIconSizeSmall
													)}
													{this.itemIsActive(element) &&
														getIconByName('checked', {
															style: {
																position: 'absolute',
																...selectListStyles.itemIconChecked,
															},
														})}
												</View>
												<Text style={selectListStyles.itemText(type)}>{element.title}</Text>
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

		return <>{this.getSelectListByType(type, elements)}</>;
	}
}

SelectList.defaultProps = {
	type: 'radio',
};

SelectList.PropsTypes = {
	type: PropsTypes.string,
	elements: PropsTypes.array.isRequired,
	initValue: PropsTypes.array,
};
