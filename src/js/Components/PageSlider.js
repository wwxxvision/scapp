import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { pageSliderStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
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

	render() {
		const { pages, indicatorsLocation, indicatorsTheme, useButtons } = this.props;
		const { selectedIndex } = this.state;
		const { setSelectedIndex, scrollRef, getButtons } = this;

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
						{pages.map((page, index) => {
							const isActiveIndicator = selectedIndex === index;
							const margins = pageSliderStyles.getIndicatorMargins(index);

							return (
								<View
									style={{
										...pageSliderStyles.indicator,
										...margins,
										...pageSliderStyles.getStylesByThemeIndicator(indicatorsTheme),
										...pageSliderStyles.getActiveIndicatorStyles(isActiveIndicator),
									}}
									key={index}
								></View>
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
