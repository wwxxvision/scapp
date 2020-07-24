import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { tableStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';

export default class Table extends Component {
	getHeader = (headers) => {
		return (
			<View style={tableStyles.row}>
				{headers.map((header, index) => {
					return (
						<View
							style={{ ...tableStyles.getFlexGrow(index), ...tableStyles.rowItem }}
							key={index}
						>
							<Text
								style={{
									...tableStyles.getTextAlign(index),
									...tableStyles.headerText,
								}}
							>
								{header}
							</Text>
						</View>
					);
				})}
			</View>
		);
	};
	getRow = (data) => {
		return data.map((item, indexRow) => {
			return (
				<View style={tableStyles.row} key={indexRow}>
					{item.row.map((rowValue, rowValueIndex) => (
						<View
							style={{
								...tableStyles.getFlexGrow(rowValueIndex),
								...tableStyles.rowItem,
								...tableStyles.rowItemPadding,
							}}
							key={rowValueIndex}
						>
							<Text
								style={{
									...tableStyles.getTextAlign(rowValueIndex),
									...tableStyles.getDataRowText(rowValueIndex),
								}}
							>
								{rowValue.value}
							</Text>
						</View>
					))}
				</View>
			);
		});
	};
	render() {
		const { getHeader, getRow } = this;
		const { headers, data } = this.props;
		return (
			<View style={tableStyles.container}>
				{getHeader(headers)}
				{getRow(data)}
			</View>
		);
	}
}

Table.PropsTypes = {
	header: PropsTypes.array.isRequired,
	data: PropsTypes.array.isRequired,
};
