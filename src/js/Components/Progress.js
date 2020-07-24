import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { progressStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';
import {
	Svg,
	Circle,
	G,
	Rect,
	ClipPath,
	Defs,
	Path,
	TSpan,
	Polyline,
} from 'react-native-svg';
import { variables, utils } from '../../Styles/Base';
import { Text as TextSvg } from 'react-native-svg';
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

	render() {
		const { svgSize, calculatePercentsToPixels } = this;
		const { percents } = this.props;
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
							<Text style={progressStyles.percents}>75%</Text>
							<Text style={progressStyles.statusText}>SMS sent</Text>
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
				</View>
			</View>
		);
	}
}
