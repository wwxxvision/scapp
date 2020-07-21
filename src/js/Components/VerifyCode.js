import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { verifyCodeStyles } from '../../Styles/Components';
import PropsTypes from 'prop-types';
import Input from './Input';

export default class VerifyCode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: [],
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
	}

	getInputByPos = (id) => this.inputs.find((input) => input.id === id);

	InputFocus = (element) => {
		element.ref.current.focus();
	};

	changeInput = (ev, { id }) => {
		const { code } = this.state;
		const { inputs } = this;
		const inputLast = id === inputs.length;
		this.setState(
			{
				code: [...code, ev],
			},
			() => {
				const nextElement = this.getInputByPos(id + 1);
				if (nextElement && !inputLast) {
					this.InputFocus(nextElement);
				}
			}
		);
	};

	focusInput = (ev, { id }) => {
		const { code } = this.state;
		const inputFirst = id === 1;
		const currentPosition = code.length;
		const selectInptIsMoreThnCurPos = id > currentPosition + 1;

		if (selectInptIsMoreThnCurPos && !inputFirst) {
			this.InputFocus(this.getInputByPos(id - 1));
		}
	};

	render() {
		const { inputs, changeInput, focusInput } = this;
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
							action={{ change: changeInput, focus: focusInput }}
							customStyles={verifyCodeStyles.verifyCodeInput}
						/>
					))}
				</View>
			</View>
		);
	}
}
