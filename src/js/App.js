import React from 'react';
import { ScrollView, View, Text } from 'react-native';
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
	ModalComponent,
	StepTabs,
	Menu,
	VerifyCode,
	PageSlider,
	Switch,
	Chart,
	Table,
} from './Components';
import CONSTANTS from './Constants/';
import { variables } from '../Styles/Base';
import { Intro } from './Views';

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
		],
		fakeStepTabs = [
			{
				title: 'Credit Card',
				description: 'Pay with MasterCard, Visa or Visa Electron.',
				icon: 'creditCard',
				linkTo: 'card',
			},
			{
				title: 'Internet Banking',
				description: 'Pay directly from your bank account.',
				icon: 'bank',
				linkTo: 'bank',
			},
			{
				title: 'Paypal',
				description: 'Faster & safer way to send money.',
				icon: 'paypal',
				linkTo: 'paypal',
			},
			{
				title: 'Bitcoin Wallet',
				description: 'Send the amount in our Bitcoin wallet.',
				icon: 'bitcoin',
				linkTo: 'bitcoin',
			},
		],
		fakeMenuTabs = [
			{
				title: 'Edit Profile',
				icon: 'profile',
				linkTo: 'editProfile',
			},
			{
				title: 'Withdrawal Options',
				icon: 'withdrawl',
				linkTo: 'withdrawlOption',
			},
			{
				title: 'Help & Support',
				icon: 'supportCall',
				linkTo: 'support',
			},
			{
				title: 'Give us feedback',
				icon: 'feedback',
				linkTo: 'feedback',
			},
			{
				title: 'Logout',
				icon: 'logout',
				linkTo: 'logout',
			},
		],
		fakeSwitchElements = [
			{
				title: 'd',
			},
			{
				title: 'w',
			},
			{
				title: 'm',
			},
			{
				title: 'y',
			},
		],
		fakeChartProps = {
			categories: {
				x: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
			},
			data: [
				{
					x: 'Jan',
					y: 5,
				},
				{
					x: 'Feb',
					y: 2,
				},
				{
					x: 'Mar',
					y: 0,
				},
				{
					x: 'Apr',
					y: 5,
				},
				{
					x: 'May',
					y: 3,
				},
				{
					x: 'Jun',
					y: 1,
				},
				{
					x: 'Jul',
					y: 1,
				},
				{
					x: 'Aug',
					y: 2,
				},
				{
					x: 'Sep',
					y: 1,
				},
				{
					x: 'Oct',
					y: 1,
				},
				{
					x: 'Nov',
					y: 1,
				},
				{
					x: 'Dec',
					y: 2,
				},
			],
		},
		fakeTable = {
			headers: ['Period', 'SMS', 'Rate', 'Sum'],
			data: [
				{
					row: [
						{
							value: 'July 2020',
						},
						{
							value: 1200,
						},
						{
							value: '$20.25',
						},
						{
							value: '$0.50',
						},
					],
				},
				{
					row: [
						{
							value: 'July 2021',
						},
						{
							value: 1200,
						},
						{
							value: '$20.25',
						},
						{
							value: '$0.50',
						},
					],
				},
			],
		};
	return (
		<>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
				}}
			>
				{/* <Header type="tab" theme="lightBlue" tabs={fakeTabs} /> */}
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						padding: variables.container.wrapper.padding,
					}}
					style={{ flex: 1, position: 'relative' }}
				>
					<Intro />
				</ScrollView>
				<Nav theme="white" />
			</View>
		</>
	);
};

export default App;
