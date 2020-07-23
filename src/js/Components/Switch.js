import React, { Component } from 'react';
import { switchStyles } from '../../Styles/Components';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropsTypes from 'prop-types';

export default class Switch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndexTab: 0,
		};
	}

	pressTab = (tab, indexTab) => {
		const { action } = this.props;
		const { currentIndexTab } = this.state;
		if (currentIndexTab !== indexTab) {
			action(tab);
			this.setState({
				currentIndexTab: indexTab,
			});
		}
	};

	render() {
		const { theme, elements } = this.props;
		const { currentIndexTab } = this.state;
		const { pressTab } = this;
		return (
			<View
				style={{
					...switchStyles.container,
					...switchStyles.getSwitchByTheme(theme),
				}}
			>
				{elements.map((element, index) => {
					// activeElement
					const elementIsActive = index === currentIndexTab;
					const activeStyleElement = elementIsActive
						? switchStyles.activeElement
						: null;
					const activeStyleTextElement = elementIsActive
						? switchStyles.activeText
						: null;
					return (
						<TouchableWithoutFeedback
							key={index}
							onPress={() => pressTab(element, index)}
						>
							<View style={{ ...switchStyles.element, ...activeStyleElement }}>
								<Text
									style={{ ...switchStyles.textElement, ...activeStyleTextElement }}
								>
									{element.title}
								</Text>
							</View>
						</TouchableWithoutFeedback>
					);
				})}
			</View>
		);
	}
}

Switch.defaultProps = {
	theme: 'selago',
};

Switch.PropsTypes = {
	elements: PropsTypes.array.isRequired,
	theme: PropsTypes.string,
	action: PropsTypes.func.isRequired,
};
