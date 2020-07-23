import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { chartStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import {
	VictoryBar,
	VictoryChart,
	VictoryZoomContainer,
	VictoryAxis,
	VictoryClipContainer,
} from 'victory-native';
import CONSTANTS from '../Constants';
import { variables } from '../../Styles/Base';
import { Svg } from 'react-native-svg';
const { colors } = variables;

const chartTheme = {
	bar: {
		fill: colors.light_blue,
	},
	labels: {
		color: colors.light_blue,
	},
	axis: {
		stroke: colors.orange,
	},
};

export default class Chart extends Component {
	render() {
		const { chartProps } = this.props;

		return (
			<View>
				<VictoryChart width={500}>
					<VictoryBar
						barWidth={30}
						animate={{
							onLoad: { duration: 500 },
						}}
						style={{
							data: { fill: chartTheme.bar.fill },
						}}
						{...chartProps}
					/>
					<VictoryAxis
						minDomain={{ y: 0 }}
						style={{
							axis: { stroke: 'transparent', strokeWidth: 4 },
						}}
					/>
				</VictoryChart>
			</View>
		);
	}
}
