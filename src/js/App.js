import React from 'react';
import { View } from 'react-native';
import Button from './Components/Button';
import Input from './Components/Input';
import CheckBox from './Components/CheckBox';
import Range from './Components/Range';

// import List from './Components/List';
const App = () => {
	return (
		<>
			<View style={{ paddingHorizontal: 10 }}>
				{/* <Button theme="danger" title="Button" />
				<Button theme="lightBlue" title="Button" /> */}
				{/* <Button theme="darkBlue" title="Button" />
				<Button theme="white" title="Button" />
				<Button theme="disable" title="Button" />
				<Button theme="opacity" title="Button" />
			<Button theme="transparent" title="Button" />  */}
				<Input label="Test" labelTheme="darkBlue" type="private" icon="lock" />
				<Input label="Test" labelTheme="darkBlue" icon="network" />
				<Input label="Test" labelTheme="darkBlue" icon="birthDay" /> 
				{/* <Button theme="disable" title="Button" />
				<Button theme="opacity" title="Button" /> */}
				<CheckBox />
				<CheckBox type="square" />
				<Range />
			</View>
		</>
	);
};

export default App;
