import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import icons from '../Utils/imageExporter';

export default function List({ elements, type, defaultValue }) {
	const initValue = defaultValue ? defaultValue : [];
	const [values, setValue] = useState(initValue);

	const getListByType = () => {
		switch (type) {
			case 'selectOne':
				return (
					<RadioButton.Group>
						{elements.map((element, index) => {
							<View>
								{element.icon && <Image source={icons[element.icon]} />}
								<View>
									<RadioButton value={[element]} />
									<Text>{element.name}</Text>
								</View>
							</View>;
						})}
					</RadioButton.Group>
				);
			default:
				return (
					<RadioButton.Group>
						{elements.map((element, index) => {
							<View>
								{element.icon && <Image source={icons[element.icon]} />}
								<View>
									<RadioButton value={element} />
									<Text>{element.name}</Text>
								</View>
							</View>;
						})}
					</RadioButton.Group>
				);
		}
	};
	return this.getListByType();
}
