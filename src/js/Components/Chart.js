import React, { Component } from 'react';
import { View } from 'react-native';
import PropsTypes from 'prop-types';
import {
	VictoryBar,
	VictoryChart,
	VictoryZoomContainer,
	VictoryAxis,
	VictoryClipContainer,
	VictoryTheme,
} from 'victory-native';
import { variables } from '../../Styles/Base';

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
	grid: {
		stroke: colors.brieze,
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
		const { chartProps, countForShow } = this.props;
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
							zoomDomain={{ x: [1, countForShow] }} //how many elements will range for zoom
						></VictoryZoomContainer>
					}
				>
					<VictoryBar
						barWidth={30}
						cornerRadius={{ topLeft: 10, topRight: 10 }}
						animate={{
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
								fill: chartTheme.labels.color,
								fontSize: 9,
								fontFamily: fonts.popinsLight,
							},
							grid: { stroke: chartTheme.grid.stroke, strokeWidth: 1 },
							axis: { stroke: chartTheme.axis.stroke, strokeWidth: 4 },
						}}
					/>
				</VictoryChart>
			</View>
		);
	}
}

Chart.PropsTypes = {
	countForShow: PropsTypes.number.isRequired,
};
