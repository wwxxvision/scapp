import React, { useState } from 'react';
import { View, Text } from 'react-native';
import icons from '../Utils/imageExporter';


export default function List({ elements, type, defaultValue }) {
	const initValue = defaultValue ? defaultValue : [];
	const [values, setValue] = useState(initValue);

	return <></>;
}
