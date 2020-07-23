import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { pageSliderStyles } from '../../Styles/Components';
import Button from './Button';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class PageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
		};
		this.scrollRef = React.createRef();
	}

	setSelectedIndex = (ev) => {
		const viewSize = ev.nativeEvent.layoutMeasurement.width;
		const contentOffset = ev.nativeEvent.contentOffset.x;
		const selectedIndex = Math.floor(contentOffset / viewSize);
		this.setState({ selectedIndex });
	};

	pressForNextIndex = () => {
		const { selectedIndex } = this.state;
		const { pages } = this.props;
		const isLastPage = pages.length - 1;
		if (selectedIndex < isLastPage)
			this.setState(
				(prev) => ({ selectedIndex: prev.selectedIndex + 1 }),
				() => {
					const { selectedIndex } = this.state;
					this.scrollRef.current.scrollTo({
						animated: true,
						x: DEVICE_WIDTH * selectedIndex,
						y: 0,
					});
				}
			);
	};

	render() {
		const { pages, indicatorsLocation } = this.props;
		const { selectedIndex } = this.state;
		const { pressForNextIndex, setSelectedIndex, scrollRef } = this;

		return (
			<View
				style={{
					...pageSliderStyles.container,
				}}
			>
				<ScrollView
					horizontal
					pagingEnabled
					onMomentumScrollEnd={setSelectedIndex}
					showsHorizontalScrollIndicator={false}
					ref={scrollRef}
				>
					{pages.map((Page, index) => (
						<View
							key={index}
							style={{
								...pageSliderStyles.slide(DEVICE_WIDTH),
								...pageSliderStyles.slidesContainer,
							}}
						>
							{Page}
						</View>
					))}
				</ScrollView>
				<View style={pageSliderStyles.controls}>
					<View
						style={{
							...pageSliderStyles.indicatorsContainer,
							...pageSliderStyles.getIndicatorsLocation(indicatorsLocation),
						}}
					>
						{pages.map((item, index) => {
							const isActiveIndicator = selectedIndex === index;
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
					<View style={pageSliderStyles.slidesContainer}>
						<Button action={pressForNextIndex} title="next" />
					</View>
				</View>
			</View>
		);
	}
}
