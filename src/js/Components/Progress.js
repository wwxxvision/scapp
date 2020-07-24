import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { progressStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';
import { Svg } from 'react-native-svg';
import { variables } from '../../Styles/Base';
import Wave from './Wave';

const { colors, fonts } = variables;

export default class Progress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: '',
		};
		this.svgSize = {
			width: 228,
			height: 228,
		};
	}

	calculatePercentsToPixels = () => {
		const { percents } = this.props;
		const { svgSize } = this;

		return (svgSize.height * percents) / 100;
	};

	showBodyByStatus = () => {
		const { calculatePercentsToPixels, svgSize } = this;
		const { status } = this.props;
		switch (status) {
			case 'waiting':
				return (
					<Svg
						{...svgSize}
						style={{ position: 'absolute', borderRadius: svgSize.width / 2 }}
					>
						<Wave
							fill={colors.orange}
							paused={false}
							options={{
								height: svgSize.height - calculatePercentsToPixels(),
								amplitude: 15,
								speed: 0.15,
								points: 2,
							}}
							width={svgSize.width}
							height={svgSize.height}
						/>
					</Svg>
				);
			case 'success':
				return (
					<View
						style={{
							width: svgSize.width,
							height: svgSize.height,
							position: 'absolute',
							zIndex: 3000,
							borderRadius: svgSize.width,
							...progressStyles.successCircle,
							overflow: 'hidden',
						}}
					></View>
				);
			case 'failed':
				return (
					<View
						style={{
							width: svgSize.width,
							height: svgSize.height,
							position: 'absolute',
							zIndex: 3000,
							borderRadius: svgSize.width,
							...progressStyles.failedCircle,
							overflow: 'hidden',
						}}
					></View>
				);
		}
	};

	showInfoByStatus = () => {
		const { status, percents, statusText } = this.props;

		switch (status) {
			case 'waiting':
				return (
					<>
						<Text style={progressStyles.percents}>{percents}%</Text>
						<Text style={progressStyles.statusText}>{statusText}</Text>
					</>
				);
			case 'success':
				return (
					<View style={{ flex: 1, alignItems: 'center' }}>
						{getIconByName('succsess')}
						<Text style={progressStyles.statusText}>{statusText}</Text>
					</View>
				);

			case 'failed':
				return (
					<View style={{ flex: 1, alignItems: 'center' }}>
						{getIconByName('failedIcon')}
						<Text style={progressStyles.statusText}>{statusText}</Text>
					</View>
				);
		}
	};

	render() {
		const { svgSize, showBodyByStatus, showInfoByStatus } = this;

		return (
			<View>
				<View
					style={{
						borderRadius: svgSize.width / 2,
						width: svgSize.width,
						height: svgSize.height,
						overflow: 'hidden',
					}}
				>
					<View
						style={{
							width: svgSize.width,
							height: svgSize.height,
							position: 'relative',
							zIndex: 30000,
							borderRadius: svgSize.width / 2,
							...progressStyles.bigCircle,
							overflow: 'hidden',
						}}
					>
						<View
							style={{
								...progressStyles.infoBlock,
							}}
						>
							{showInfoByStatus()}
						</View>
					</View>
					<View
						style={{
							width: svgSize.width,
							height: svgSize.height,
							position: 'absolute',
							zIndex: 3000,
							borderRadius: svgSize.width,
							...progressStyles.middleCircle,
							overflow: 'hidden',
						}}
					></View>
					{showBodyByStatus()}
				</View>
			</View>
		);
	}
}

Progress.PropsTypes = {
	percents: PropsTypes.number,
	status: PropsTypes.string,
	statusText: PropsTypes.string,
};
