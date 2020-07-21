import React, { Component } from 'react';
import { modalStyles } from '../../Styles/Components';
import Modal from 'react-native-modal';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropsTypes from 'prop-types';
import getIconByName from '../Utils/getIconByName';

export default class ModalComponent extends Component {
	render() {
		const { title, label, children } = this.props;
		return (
			<View>
				<Modal isVisible={true}>
					<View style={modalStyles.container}>
						<View style={modalStyles.modalHeader}>
							<Text style={modalStyles.modalTitle}>{title}</Text>
							<TouchableWithoutFeedback>
								{getIconByName('close')}
							</TouchableWithoutFeedback>
						</View>
						{label && (
							<View style={modalStyles.modalLabel}>
								<Text style={modalStyles.labelText}>{label}</Text>
							</View>
						)}
						<View style={modalStyles.modalBody}>{children}</View>
					</View>
				</Modal>
			</View>
		);
	}
}

ModalComponent.PropsTypes = {
	title: PropsTypes.string,
	label: PropsTypes.string,
};
