import React from 'react';
import { View, Text } from 'react-native';
import getIconByName from '../Utils/getIconByName';
import PropsTypes from 'prop-types';
import { listStyles } from '../../Styles/Components';
import { variables } from '../../Styles/Base';

export default function List({ elements }) {
	const getMark = (type) => {
		switch (type) {
			case 'increase':
				return '+';
			case 'decrease':
				return '-';
			default:
				return '';
		}
	};
	return (
		<View>
			{elements.map((element, index) => {
				const isLastElement = index === elements.length - 1;
				const borders = listStyles.setBorder(isLastElement);

				return (
					<View key={element.id} style={{ ...listStyles.listItem, ...borders }}>
						<View style={listStyles.dataUser}>
							<View style={listStyles.iconUser}>
								{!element.avatar &&
									getIconByName('user', {
										style: {
											position: 'absolute',
										},
										height: 17,
										width: 14,
										stroke: variables.colors.dark_blue,
									})}
							</View>
							<View style={listStyles.listItemTextBlock}>
								<Text style={listStyles.textBlockName}>{element.name}</Text>
								<Text style={listStyles.textBlockStatus}>{element.status}</Text>
							</View>
						</View>
						<View style={listStyles.listItemEndTextBlock}>
							<Text
								style={{
									...listStyles.endTextBlock,
									...listStyles[element.data.type],
									paddingRight: 7,
								}}
							>
								{getMark(element.data.type)}
							</Text>
							<Text
								style={{
									...listStyles.endTextBlock,
									...listStyles[element.data.type],
								}}
							>
								{element.data.value}
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
}

List.PropsTypes = {
	elements: PropsTypes.array.isRequired,
};
