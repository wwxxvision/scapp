import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Animated } from 'react-native';
import { pageSliderStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import Button from './Button';

export default class PageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			indicatorMoveX: new Animated.Value(0), // this values for create  moving animation on absis x,
			DEVICE_WIDTH: Dimensions.get('window').width,
		};
		this.scrollRef = React.createRef();
		this.animationDuration = 500;

		Dimensions.addEventListener('change', () => {
			this.setState({
				DEVICE_WIDTH: Dimensions.get('window').width,
			});
		});
	}

	setSelectedIndex = (ev) => {
		const viewSize = ev.nativeEvent.layoutMeasurement.width;
		const contentOffset = ev.nativeEvent.contentOffset.x;
		const selectedIndex = Math.floor(contentOffset / viewSize);
		this.setState({ selectedIndex });
	};

	pressForNextIndex = () => {
		const { selectedIndex, DEVICE_WIDTH } = this.state;
		const { pages } = this.props;
		const { animateIndicatorWhenPressed, scrollRef } = this;
		const isLastPage = pages.length - 1;
		if (selectedIndex < isLastPage)
			this.setState(
				(prev) => ({ selectedIndex: prev.selectedIndex + 1 }),
				() => {
					const { selectedIndex } = this.state;
					animateIndicatorWhenPressed();
					scrollRef.current.scrollTo({
						animated: true,
						x: DEVICE_WIDTH * selectedIndex,
						y: 0,
					});
				}
			);
	};

	getButtons = () => {
		const {
			pages,
			lastButtonTitle,
			lastButtonAction,
			indicatorsTheme,
		} = this.props;
		const { selectedIndex } = this.state;
		const { pressForNextIndex } = this;
		const isLastPage = selectedIndex === pages.length - 1;

		if (isLastPage && lastButtonTitle) {
			return (
				<View style={pageSliderStyles.slidesContainer}>
					<Button
						theme={indicatorsTheme}
						action={lastButtonAction}
						title={lastButtonTitle}
					/>
				</View>
			);
		}

		return (
			<View style={pageSliderStyles.slidesContainer}>
				<Button theme={indicatorsTheme} action={pressForNextIndex} title="Next" />
			</View>
		);
	};

	animateIndicator = (ev) => {
		const { indicatorMoveX } = this.state;
		const { x: moveX } = ev.nativeEvent.velocity;
		const { animationDuration } = this;
		const dir = moveX >= 0 ? 1 : -1;

		Animated.timing(indicatorMoveX, {
			toValue: dir * 2.5,
			duration: animationDuration,
			useNativeDriver: false,
		}).start();
	};

	animateIndicatorWhenPressed = () => {
		const { indicatorMoveX } = this.state;
		const { animationDuration } = this;
		Animated.timing(indicatorMoveX, {
			toValue: 1 * 2.5,
			duration: animationDuration,
			useNativeDriver: false,
		}).start();
	};

	render() {
		const { pages, indicatorsLocation, indicatorsTheme, useButtons } = this.props;
		const { selectedIndex, indicatorMoveX, DEVICE_WIDTH } = this.state;
		const { setSelectedIndex, scrollRef, getButtons, animateIndicator } = this;

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
					onScroll={animateIndicator}
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
						{pages.map((page, index) => {
							const isActiveIndicator = selectedIndex === index;
							const margins = pageSliderStyles.getIndicatorMargins(index);
							const animationIdicatorOnAbsisX = isActiveIndicator ? indicatorMoveX : 0;
							return (
								<Animated.View
									style={{
										...pageSliderStyles.indicator,
										...margins,
										...pageSliderStyles.getStylesByThemeIndicator(indicatorsTheme),
										...pageSliderStyles.getActiveIndicatorStyles(isActiveIndicator),
										transform: [
											{
												translateX: animationIdicatorOnAbsisX,
											},
										],
									}}
									key={index}
								></Animated.View>
							);
						})}
					</View>
					{useButtons && getButtons()}
				</View>
			</View>
		);
	}
}

PageSlider.defaultProps = {
	indicatorsTheme: 'white',
	indicatorsLocation: 'left',
	useButtons: true,
};

PageSlider.PropsTypes = {
	indicatorsTheme: PropsTypes.string,
	indicatorsLocation: PropsTypes.string,
	useButtons: PropsTypes.boolean,
	pages: PropsTypes.array.isRequired,
	lastButtonTitle: PropsTypes.string,
	lastButtonAction: PropsTypes.func,
};
