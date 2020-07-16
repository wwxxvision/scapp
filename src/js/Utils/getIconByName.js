import React from 'react';
import icons from '../Utils/imageExporter';

export default function getIconByName(name, props) {
	let Icon = icons[name];
	return <Icon {...props} />;
}
