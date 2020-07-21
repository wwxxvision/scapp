import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { verifyCodeStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

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
		const { tickInterval } = this.state;

		this.interval = () =>
			setInterval((interval) => {
				this.decreaseIntervalTick();
				const timeIsLeft = tickInterval === 0;

				if (timeIsLeft) {
					this.resetIntervalTick();
					clearInterval(this.interval);
				}
				return interval;
			}, 1000);
	};

	decreaseIntervalTick = () => this.setState({ tickInterval: tickInterval - 1 });

	resetIntervalTick = () =>
		this.setState({ tickInterval: this.props.resendSmsTime });

	getInputByPos = (id) => this.inputs.find((input) => input.id === id);

	inputFocus = (element) => element.ref.current.focus();

	getCodeValueHowNumber = () => {
		const { code } = this.state;
		const isValideCode = code.every(itemCode => !isNaN(Number(itemCode.value)))
		if (isValideCode) {
			return 	this.state.code.map(itemCode => itemCode.value).join('');
		}

		return false;
	};

	deleteCodeValue = () => {
		const { code } = this.state;

		code.map((codeItem) => {
			if (codeItem.id === id) {
				codeItem.value = null;
			}

			return codeItem;
		});

		return code;
	};

	updateCodeValue = () => {
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
		const { inputs, deleteCodeValue, updateCodeValue } = this;
		const inputLast = id === inputs.length;
		if (value) {
			this.setState(
				{
					code: updateCodeValue(),
				},
				() => {
					const nextElement = this.getInputByPos(id + 1);
					if (nextElement && !inputLast) {
						this.inputFocus(nextElement);
					}
				}
			);
		} else {
			this.setState({
				code: deleteCodeValue(),
			});
		}
	};

	backspace = ({ id }) => {
		const inputFirst = id === 1;
		if (!inputFirst) this.inputFocus(this.getInputByPos(id - 1));
	};

	pressVerify = () => {
		const { initInterval } = this;
		initInterval();
		
	}

	render() {
		const { inputs, changeInput, backspace } = this;
		return (
			<View>
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
							action={{ change: changeInput, backspace }}
							customStyles={verifyCodeStyles.verifyCodeInput}
						/>
					))}
				</View>
				<View>
					<Button action={} title="Verify" theme="lightBlue" />
				</View>
			</View>
		);
	}
}
