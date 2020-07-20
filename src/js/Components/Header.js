import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropsTypes from 'prop-types';
import RouteHeader from './Header/RouteHeader';
import BalanceHeader from './Header/BalanceHeader';
import { headerStyles } from '../../Styles/Components';
import TabHeader from './Header/TabHeader';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.headerTypes = [
			{
				name: 'balance',
				Component: BalanceHeader,
			},
			{
				name: 'tab',
				Component: TabHeader,
			},
			{
				name: 'route',
				Component: RouteHeader,
			},
		];
	}

	getHeader = (headerTypes, type) => {
		const currentHeader = headerTypes.find((header) => header.name === type);
		if (currentHeader) {
			return (
				<currentHeader.Component
					headerStyles={headerStyles}
					{...this.props}
					title="Withdrawal Options"
				/>
			);
		} else {
			throw Error('Incorect header type');
		}
	};

	render() {
		const { type } = this.props;
		const { headerTypes, getHeader } = this;
		return <>{getHeader(headerTypes, type)}</>;
	}
}

Header.PropsTypes = {
	type: PropsTypes.string.isRequired,
};
