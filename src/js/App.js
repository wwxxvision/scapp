import React from 'react';
import { ScrollView, View } from 'react-native';
import {
	SelectList,
	Input,
	CheckBox,
	Button,
	Nav,
	Tag,
	List,
	Range,
	Header,
	Card,
	Progress,
} from './Components';
console.log(Card);
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
		],
		fakelistRef = [
			{
				id: 0,
				name: 'Jhon Jhon',
				status: 'Accepted Inovation',
				avatar: false,
				data: {
					type: 'increase',
					value: '$20',
				},
			},
			{
				id: 1,
				name: 'Jhon Jhon',
				status: 'Accepted Inovation',
				avatar: false,
				data: {
					type: 'decrease',
					value: '$20',
				},
			},
			{
				id: 2,
				name: 'Jhon Jhon',
				status: 'Accepted Inovation',
				avatar: false,
				data: {
					type: 'increase',
					value: '$20',
				},
			},
		],
		fakeBalanceDate = [
			{
				title: 'My balance',
				value: '$17.45',
			},
			{
				title: 'Sent Today',
				value: '12/50',
			},
		],
		fakeTabs = [
			{
				title: 'Overview',
			},
			{
				title: 'Referrals',
			},
			{
				title: 'Payouts',
			},
		];
	return (
		<>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
				}}
			>
				<Header type="tab" theme="lightBlue" tabs={fakeTabs} />
				<ScrollView style={{ flex: 1 }}>
					{/* <Tag text="It is a tag" />
					<Range layoutWidth={200} min={1} max={1000} />
					<Button theme="danger" title="Button" />
					<Button theme="lightBlue" title="Button" />
					<Button theme="darkBlue" title="Button" />
					<Button theme="white" title="Button" />
					<Button theme="disable" title="Button" />
					<Button theme="opacity" title="Button" /> */}
					{/* <Input label="Test" labelTheme="darkBlue" type="private" icon="lock" />
					<Input label="Test" labelTheme="darkBlue" icon="network" />
					<Input label="Test" labelTheme="darkBlue" icon="birthDay" />
					<Input label="Test" labelTheme="darkBlue" icon="user" />
					<Input label="Test" icon="user" /> */}
					{/* <SelectList type="checkboxes" elements={fakelist} />
					<SelectList type="radio" elements={fakelist} /> */}

					<Card
						title="The test title"
						text="Lorem ipsum 2144914941 Lorem ipsum 2144914941Lorem ipsum 2144914941Lorem ipsum 2144914941Lorem ipsum 2144914941Lorem ipsum 2144914941Lorem ipsum 2144914941"
					/>
					<Progress />
					<List elements={fakelistRef} />
				</ScrollView>
				<Nav theme="white" />
			</View>
		</>
	);
};

export default App;
