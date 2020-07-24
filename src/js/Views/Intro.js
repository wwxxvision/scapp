import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { introStyles } from '../../Styles/Views/Intro';
import getIconByName from '../Utils/getIconByName';
import { APP } from '../Constants/app';

export default function Intro({ bgName, title, description }) {
	return (
		<View style={introStyles.container}>
			<View style={introStyles.headerBlock}>
				<Text style={introStyles.appName}>{APP.NAME}</Text>
				<Text style={introStyles.title}>{title}</Text>
			</View>
			<View style={introStyles.block}>
				{getIconByName(bgName, { style: introStyles.backgroundsSizes }, true)}
			</View>
			<View style={{ ...introStyles.block }}>
				<Text style={introStyles.description}>{description}</Text>
			</View>
		</View>
	);
}
