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
	VictoryTheme,
} from 'victory-native';
import CONSTANTS from '../Constants';
import { variables } from '../../Styles/Base';
import { Svg } from 'react-native-svg';
const { colors, fonts } = variables;

const chartTheme = {
	bar: {
		fill: colors.light_blue,
	},
	labels: {
		color: colors.dark_blue,
	},
	axis: {
		stroke: colors.orange,
	},
};

export default class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			widthContainer: 0,
		};
	}
	render() {
		const { chartProps } = this.props;
		const { widthContainer } = this.state;
		return (
			<View
				onLayout={(ev) =>
					this.setState({ widthContainer: ev.nativeEvent.layout.width })
				}
			>
				<VictoryChart
					theme={VictoryTheme.material}
					width={widthContainer}
					height={220}
					containerComponent={
						<VictoryZoomContainer
							width={widthContainer}
							allowZoom={false}
							clipContainerComponent={
								<VictoryClipContainer clipPadding={{ left: 20, right: 20 }} />
							}
							zoomDomain={{ x: [1, CONSTANTS.APP.CHART.MAX_VIEW_ITEMS] }}
						></VictoryZoomContainer>
					}
				>
					<VictoryBar
						barWidth={30}
						cornerRadius={{ topLeft: 10, topRight: 10 }}
						animate={{
							duration: 1000,
							onLoad: { duration: 500 },
						}}
						style={{
							data: { fill: chartTheme.bar.fill },
						}}
						{...chartProps}
					/>
					<VictoryAxis
						width={widthContainer}
						style={{
							tickLabels: {
								fontSize: 20,
								fill: chartTheme.labels.color,
								fontSize: 9,
								fontFamily: fonts.popinsLight,
							},
							grid: { stroke: '#D6F3F6', strokeWidth: 1 },
							axis: { stroke: chartTheme.axis.stroke, strokeWidth: 4 },
						}}
					/>
				</VictoryChart>
			</View>
		);
	}
}
