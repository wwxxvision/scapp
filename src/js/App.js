import React from 'react';
import { View } from 'react-native';
import Button from './Components/Button';

const App = () => {
	return (
		<>
			<View style={{ paddingHorizontal: 10 }}>
				<Button theme="danger" title="Button" />
				<Button theme="lightBlue" title="Button" />
				<Button theme="darkBlue" title="Button" />
				<Button theme="white" title="Button" />
				<Button theme="disable" title="Button" />
				<Button theme="opacity" title="Button" />
				<Button theme="transparent" title="Button" />
			</View>
		</>
	);
};

export default App;
