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
import { Intro, Enter } from './Views';

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
		},
		fakeFormInputs = [
			{
				type: 'phone',
				icon: 'call',
				theme: 'cream',
				label: 'Phone number',
				labelTheme: 'darkBlue',
				country: {
					phoneCode: 7,
					code: 'RU',
				},
			},
			{
				type: 'private',
				icon: 'lock',
				theme: 'cream',
				label: 'Password',
				labelTheme: 'darkBlue',
			},
			{
				type: 'private',
				icon: 'lock',
				theme: 'cream',
				label: 'Confirm password',
				labelTheme: 'darkBlue',
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
				{/* <PageSlider
					indicatorsTheme="lightBlue"
					indicatorsLocation="center"
					lastButtonTitle="Get started"
					lastButtonAction={() => false}
					pages={[
						<Intro
							title="What is it for?"
							bgName="whatIsItForBg"
							description="We pay you from 1 cent for each International SMS from your mobile plan."
						/>,
						<Intro
							title="How it works ?"
							bgName="howItWorks"
							description="SMS will be sent from your
							phone in the background and
							you just get the cashback."
						/>,
						<Intro
							title="How to start ?"
							bgName="howToStart"
							description="Just check your mobile number
							and set the amount of SMS
							you’d like to sell."
						/>,
					]}
				/> */}
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
					style={{ flex: 1, position: 'relative' }}
				>
					<Enter
						theme="white"
						title="Sing Up"
						type="singup"
						description="Register with your phone number"
					/>
					{/* <Enter
						theme="lightBlue"
						title="Login"
						type="login"
						description="Register with your phone number"
					/> */}
				</ScrollView>
			</View>
		</>
	);
};

export default App;
