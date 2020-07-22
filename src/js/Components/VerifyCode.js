import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { verifyCodeStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import BackgroundTimer from 'react-native-background-timer';
import Input from './Input';
import Button from './Button';
import Helpers from '../Utils/Helpers';

export default class VerifyCode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: [
				{
					id: 1,
					value: null,
				},
				{
					id: 2,
					value: null,
				},
				{
					id: 3,
					value: null,
				},
				{
					id: 4,
					value: null,
				},
			],
			tickInterval: this.props.resendSmsTime,
			currentEvent: 'waiting',
		};
		this.inputs = [
			{
				id: 1,
				Component: Input,
				ref: React.createRef(),
			},
			{
				id: 2,
				Component: Input,
				ref: React.createRef(),
			},
			{
				id: 3,
				Component: Input,
				ref: React.createRef(),
			},
			{
				id: 4,
				Component: Input,
				ref: React.createRef(),
			},
		];
		this.interval = null;
	}

	initInterval = () => {
		this.interval = BackgroundTimer.setInterval(() => {
			this.decreaseIntervalTick().then((tickInterval) => {
				const timeIsLeft = tickInterval === 0;

				if (timeIsLeft) {
					this.resetIntervalTick();
					this.setState({
						currentEvent: 'waiting',
					});

					BackgroundTimer.clearInterval(this.interval);
				}
			});
		}, 1000);
	};

	decreaseIntervalTick = () =>
		new Promise((resolve) => {
			this.setState({ tickInterval: this.state.tickInterval - 1 }, () =>
				resolve(this.state.tickInterval)
			);
		});

	resetIntervalTick = () =>
		this.setState({ tickInterval: this.props.resendSmsTime });

	getInputByPos = (id) => this.inputs.find((input) => input.id === id);

	inputFocus = (element) => element.ref.current.focus();

	getCodeValueHowNumber = () => {
		const { code } = this.state;
		const isValideCode = code.every((itemCode) => Number(itemCode.value));

		if (isValideCode) {
			return code.map((itemCode) => itemCode.value).join('');
		}

		return false;
	};

	getButtonTheme = () => {
		const { currentEvent } = this.state;

		switch (currentEvent) {
			case 'invalid':
			case 'waiting':
				return 'lightBlue';
			case 'sending':
				return 'disable';
			default:
				return 'lightBlue';
		}
	};

	deleteCodeValue = (id) => {
		const { code } = this.state;

		code.map((codeItem) => {
			if (codeItem.id === id) {
				codeItem.value = null;
			}

			return codeItem;
		});

		return code;
	};

	updateCodeValue = (value, id) => {
		const { code } = this.state;

		code.map((itemCode) => {
			if (itemCode.id === id) {
				itemCode.value = value;
			}

			return itemCode;
		});

		return code;
	};

	changeInput = (value, { id }) => {
		const { inputs, deleteCodeValue, updateCodeValue, pressVerify } = this;
		const { code } = this.state;
		const inputLast = id === inputs.length;

		if (value) {
			this.setState(
				{
					code: updateCodeValue(value, id),
				},
				() => {
					const isCompleteCode = code.every((codeItem) => codeItem.value);
					if (isCompleteCode) {
						pressVerify();

						return;
					}
					const nextElement = this.getInputByPos(id + 1);
					if (nextElement && !inputLast) {
						this.inputFocus(nextElement);
					}
				}
			);
		} else {
			this.setState({
				code: deleteCodeValue(id),
			});
		}
	};

	backspace = ({ id }) => {
		const inputFirst = id === 1;
		if (!inputFirst) this.inputFocus(this.getInputByPos(id - 1));
	};

	pressVerify = () => {
		const { currentEvent } = this.state;
		const { initInterval, getCodeValueHowNumber } = this;
		const code = getCodeValueHowNumber();
		const isSending = currentEvent === 'sending';

		if (!isSending) {
			this.setState({
				currentEvent: 'waiting',
			});

			if (code) {
				initInterval();
				this.setState({
					currentEvent: 'sending',
				});
			} else {
				this.setState({
					currentEvent: 'invalid',
				});
			}
		}
	};

	getValidateText = () => {
		const { currentEvent } = this.state;
		const { textValidation } = this.props;
		const isInvalide = currentEvent === 'invalid';

		return (
			<Text style={verifyCodeStyles.textValidation}>
				{isInvalide ? textValidation : ''}
			</Text>
		);
	};

	getTimeInfo = () => {
		const { currentEvent, tickInterval } = this.state;
		const isSending = currentEvent === 'sending';

		if (isSending) {
			return (
				<Text style={verifyCodeStyles.timer}>
					Resend SMS In {Helpers.sec2time(tickInterval)}
				</Text>
			);
		} else {
			return <></>;
		}
	};

	render() {
		const {
			inputs,
			changeInput,
			backspace,
			pressVerify,
			getValidateText,
			getButtonTheme,
			getTimeInfo,
		} = this;
		const { currentEvent } = this.state;

		return (
			<View style={verifyCodeStyles.container}>
				<View style={verifyCodeStyles.inputsWrapper}>
					{inputs.map((input) => (
						<input.Component
							ref={input.ref}
							key={input.id}
							maxLength={1}
							type="number"
							customProps={{
								id: input.id,
							}}
							keyboardType="numeric"
							editable={currentEvent !== 'sending'}
							isInvalid={currentEvent === 'invalid'}
							action={{ change: changeInput, backspace }}
							customStyles={verifyCodeStyles.verifyCodeInput}
						/>
					))}
				</View>
				{getValidateText()}
				{getTimeInfo()}
				<View>
					<Button action={pressVerify} title="Verify" theme={getButtonTheme()} />
				</View>
			</View>
		);
	}
}

VerifyCode.PropsTypes = {
	textValidation: PropsTypes.string.isRequired,
	resendSmsTime: PropsTypes.number.isRequired,
};
