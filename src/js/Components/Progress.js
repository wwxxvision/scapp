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

const { colors, fonts } = variables;

export default class Progress extends Component {
	constructor(props) {
		super(props);
		this.svgSize = {
			width: 228,
			height: 228,
		};
	}

	render() {
		const { svgSize } = this;

		return (
			<View>
				<Svg {...svgSize}>
					<Defs>
						<ClipPath></ClipPath>
					</Defs>
					<Rect
						x="0"
						y="0"
						width={svgSize.width}
						height={svgSize.height}
						fill="black"
					/>
					<Circle
						cx={svgSize.width / 2}
						cy={svgSize.height / 2}
						r={100}
						strokeWidth="10"
						stroke="green"
						fill="transparent"
					/>
				</Svg>
			</View>
		);
	}
}
