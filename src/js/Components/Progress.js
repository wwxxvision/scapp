import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { progressStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';
import { Svg, Circle, G, ClipPath, Defs, Rect, Path } from 'react-native-svg';
import { variables } from '../../Styles/Base';

const { colors } = variables;

export default class Progress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 10,
		};
		this.svgSize = {
			width: 228,
			height: 228,
		};
		this.circlePos = {
			x: this.svgSize.width / 2,
			y: this.svgSize.height / 2,
		};
		this.radius = 78;
	}

	getPath = () => {
		const { circlePos, radius } = this;
		const { progress } = this.state;

		// const startPoint = {
		// 	x: circlePos.x / 2,
		// 	y: radius - progress * 100,
		// };

		// console.log(startPoint);
		let x0 = circlePos.x - radius,
			y0 = circlePos.y,
			dx0 = 50,
			dy0 = 45,
			dx1 = 20,
			dy1 = -25,
			x1 = circlePos.x + radius,
			y1 = circlePos.y;

		return `M ${x0} ${y0} C ${x0 + dx0} ${y0 + dy0} ${circlePos.x + dx1} ${
			y0 + dy1
		} ${x1} ${y1}
      S ${circlePos.x} ${y0 + radius * 2} ${x0 - 50} ${y0 + 50}
    `;
	};

	render() {
		const { progress } = this.state;
		const { svgSize, circlePos, getPath, radius } = this;
		return (
			<Svg height={svgSize.height} width={svgSize.width}>
				<Defs>
					<ClipPath id="clip-wave">
						<Path fillRule="evenodd" d={getPath()} />
					</ClipPath>
				</Defs>
				<G>
					<Circle cx={circlePos.x} cy={circlePos.y} r="100" fill={colors.blue} />
					<Circle cx={circlePos.x} cy={circlePos.y} r="93" fill={colors.dark_blue} />
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
					{/* <Path d={getPath()} strokeWidth="1" stroke={colors.orange} /> */}
				</G>
			</Svg>
		);
	}
}
