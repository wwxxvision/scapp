import React from 'react';
import icons from '../Utils/imageExporter';
import { Image } from 'react-native';

export default function getIconByName(name, props, isImage) {
	if (!isImage) {
		let Icon = icons[name];
		return <Icon {...props} />;
	} else {
		return <Image resizeMode="contain" source={icons[name]} {...props} />;
	}
}
