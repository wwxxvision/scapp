import React from 'react';
import { ScrollView } from 'react-native';
import SelectList from './Components/SelectList';
import Input from './Components/Input';
import CheckBox from './Components/CheckBox';
import Button from './Components/Button';
import Nav from './Components/Nav';
import Tag from './Components/Tag';

const App = () => {
	const fakelist = [
		{
			id: 0,
			title: 'Spain',
			useIcon: true,
			iconName: 'spain',
		},
		{
			id: 1,
			title: 'United states of america ',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 2,
			title: 'United states of america',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 3,
			title: 'United states of america',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 4,
			title: 'United states of america',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 5,
			title: 'United states of america',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 6,
			title: 'United states of america',
			useIcon: true,
			iconName: 'usa',
		},
		{
			id: 7,
			title: 'Spain',
			useIcon: true,
			iconName: 'spain',
		},
		{
			id: 8,
			title: 'Spain',
			useIcon: true,
			iconName: 'spain',
		},
		{
			id: 9,
			title: 'Spain',
			useIcon: true,
			iconName: 'spain',
		},
	];
	return (
		<>
			<ScrollView
				contentContainerStyle={{
					flex: 1,
					backgroundColor: 'black',
					position: 'relative',
					height: '100%',
				}}
			>
				{/* <Button theme="danger" title="Button" />
				<Button theme="lightBlue" title="Button" />
				<Button theme="darkBlue" title="Button" />
				<Button theme="white" title="Button" />
				<Button theme="disable" title="Button" />
				<Button theme="opacity" title="Button" />
				<Button theme="transparent" title="Button" />
				<Input label="Test" labelTheme="darkBlue" type="private" icon="lock" />
				<Input label="Test" labelTheme="darkBlue" icon="network" />
				<Input label="Test" labelTheme="darkBlue" icon="birthDay" />
				<Input label="Test" labelTheme="darkBlue" icon="user" />
				<Input label="Test" icon="user" />
				<List type="checkboxes" elements={fakelist} />
				<List type="radio" elements={fakelist} /> */}
				{/* <List type="checkboxes" elements={fakelist} /> */}
				{/* <SelectList type="checkboxes" elements={fakelist} /> */}
				<Tag text="Centered example text" />
				<Nav theme="white" />
			</ScrollView>
		</>
	);
};

export default App;
