import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { progressStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';
import { Svg, Circle, G, ClipPath, Defs, Path, TSpan } from 'react-native-svg';
import { variables, utils } from '../../Styles/Base';
import { Text as TextSvg } from 'react-native-svg';

const { colors, fonts } = variables;

export default class Progress extends Component {
	constructor(props) {
		super(props);
		this.svgSize = {
			width: 228,
			height: 228,
		};
		this.circlePos = {
			x: this.svgSize.width / 2,
			y: this.svgSize.height / 2,
		};
		this.radius = 78;
		this.state = {
			progress: 10,
			x0: this.circlePos.x - this.radius,
			y0: this.circlePos.y,
			dx0: 50,
			dy0: 45,
			dx1: 20,
			dy1: -25,
			x1: this.circlePos.x + this.radius,
			y1: this.circlePos.y,
		};
	}

	componentDidMount() {
		this.animateWave();
	}

	animateWave() {}

	getPath = () => {
		const { circlePos, radius } = this;
		const { progress } = this.state;
		const { x0, y0, dx0, dy0, dx1, dy1, x1, y1 } = this.state;
		console.log(y0);
		return `M ${x0} ${y0} C ${x0 + dx0} ${y0 + dy0} ${circlePos.x + dx1} ${
			y0 + dy1
		} ${x1} ${y1}
      S ${circlePos.x} ${y0 + radius * 2} ${x0 - 50} ${y0 + 200}
    `;
	};

	render() {
		const { progress } = this.state;
		const { svgSize, circlePos, getPath, radius } = this;
		return (
			<View>
				<Svg height={svgSize.height} width={svgSize.width}>
					<Defs>
						<ClipPath id="clip-wave">
							<Path fillRule="evenodd" d={getPath()} />
						</ClipPath>
					</Defs>
					<G>
						<Circle cx={circlePos.x} cy={circlePos.y} r="97" fill={colors.blue} />
						<Circle
							cx={circlePos.x}
							cy={circlePos.y}
							r="93"
							fill={colors.dark_blue}
						/>
						<Circle
							cx={circlePos.x}
							cy={circlePos.y}
							r={radius}
							fill={colors.light_blue}
						/>
						<Circle
							r={radius}
							cx={circlePos.x}
							cy={circlePos.y}
							fill={colors.orange}
							clipPath="url(#clip-wave)"
						/>
						<TextSvg
							x={circlePos.x - 15}
							y={circlePos.y + 5}
							textAnchor="middle"
							dominantBaseline="middle"
							fontFamily={fonts.popinsSemiBold}
							fontSize={41}
							fill={colors.white}
						>
							{progress}%
						</TextSvg>
						<TextSvg
							x={circlePos.x}
							y={circlePos.y + 30}
							textAnchor="middle"
							dominantBaseline="middle"
							fontFamily={fonts.popins}
							fontSize={18}
							fill={colors.white}
						>
							SMS sent
						</TextSvg>
					</G>
				</Svg>
			</View>
		);
	}
}
