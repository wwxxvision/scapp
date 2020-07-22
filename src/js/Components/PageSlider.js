import React, { Component } from 'react';
import { View } from 'react-native';
import { pageSliderStyles } from '../../Styles/Components';
import Carousel from 'react-native-snap-carousel';

import Button from './Button';

export default class PageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: props.pages[0],
			widthLayout: 0,
			slide: 0,
		};
	}
	componentDidMount() {
		this.increaseWidth();
	}

	increaseWidth = () => {};

	nextSlide = () => {
		this.setState({
			slide: this.state.slide + 1,
			currentSlide: this.props.pages[this.state.slide + 1],
		});
	};

	_renderItem = ({ item, index }) => {
		return <View>{item}</View>;
	};

	render() {
		const { pages, indicatorsLocation } = this.props;
		const { currentSlide, slide } = this.state;
		const { nextSlide } = this;

		return (
			<View
				style={{
					...pageSliderStyles.container,
				}}
			>
				<View style={pageSliderStyles.slidesContainer}>
					{pages.map((Page, index) => (
						<View key={index} style={pageSliderStyles.slide}>
							{Page}
						</View>
					))}
				</View>
				<View style={pageSliderStyles.controls}>
					<View
						style={{
							...pageSliderStyles.indicatorsContainer,
							...pageSliderStyles.getIndicatorsLocation(indicatorsLocation),
						}}
					>
						{pages.map((item, index) => {
							const isActiveIndicator = slide === index;
							const margins = pageSliderStyles.getIndicatorMargins(index);

							return (
								<View
									style={{
										...pageSliderStyles.indicator,
										...margins,
										...pageSliderStyles.getActiveIndicatorStyles(isActiveIndicator),
									}}
									key={index}
								></View>
							);
						})}
					</View>
					<Button action={nextSlide} title="next" />
				</View>
			</View>
		);
	}
}
