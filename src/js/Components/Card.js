import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { cardStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';

export default function Card({ title, text }) {
	const [cardShowIsFull, showCard] = useState(false);
	const show = () => showCard(true);
	const hide = () => showCard(false);

	return (
		<TouchableWithoutFeedback onPress={show}>
			<View style={cardStyles.container}>
				<Text style={cardStyles.cardTitle}>{title}</Text>
				{cardShowIsFull && (
					<>
						<Text style={cardStyles.cardText}>{text}</Text>
						<TouchableWithoutFeedback onPress={hide}>
							<View style={cardStyles.cardLessButton}>
								<Text style={cardStyles.ButtonText}>less</Text>
								{getIconByName('arrowUp', { style: { marginLeft: 7 } })}
							</View>
						</TouchableWithoutFeedback>
					</>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

Card.PropsTypes = {
	title: PropsTypes.string.isRequired,
	text: PropsTypes.string.isRequired,
};
