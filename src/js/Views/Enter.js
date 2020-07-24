import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import getIconByName from '../Utils/getIconByName';
import PropsTypes from 'prop-types';
import { formStyles } from '../../Styles/Components';
import { enterStyles } from '../../Styles/Views/Enter';
import { Input, CheckBox } from '../Components';

export default class Enter extends Component {
	getForm = () => {
		const { type } = this.props;

		switch (type) {
			case 'singup':
				return (
					<>
						<View style={formStyles.block}>
							<Input
								type="phone"
								icon="call"
								theme="cream"
								label="Phone number"
								labelTheme="darkBlue"
								country={{
									phoneCode: 7,
									code: 'RU',
								}}
							/>
						</View>
						<View style={formStyles.block}>
							<Input
								type="private"
								icon="lock"
								theme="cream"
								label="Password"
								labelTheme="darkBlue"
							/>
						</View>
						<View style={formStyles.block}>
							<Input
								type="private"
								icon="lock"
								theme="cream"
								label="Confirm password"
								labelTheme="darkBlue"
							/>
						</View>
						<View style={{ ...formStyles.block, ...enterStyles.termOfUseBlock }}>
							<CheckBox isChecked={() => true} type="square" />
							<View>
								<Text style={enterStyles.termOfUseText}>
									I have read and agree with
								</Text>
								<TouchableWithoutFeedback>
									<Text style={enterStyles.termOfUseTextLink}>Terms & conditions</Text>
								</TouchableWithoutFeedback>
							</View>
						</View>
					</>
				);
		}
	};
	render() {
		const { getForm } = this;
		const { theme, title, description } = this.props;
		return (
			<View>
				<View>
					{getIconByName('appIcon', {
						style: {
							height: 63,
							width: 83,
						},
					})}
				</View>

				<View style={enterStyles.titlesBlock}>
					<Text style={{ ...formStyles.title(theme) }}>{title}</Text>
					<Text style={{ ...formStyles.description(theme) }}>{description}</Text>
				</View>

				<View>{getForm()}</View>
			</View>
		);
	}
}
