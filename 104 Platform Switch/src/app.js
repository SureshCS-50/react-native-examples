
import React, { Alert, Component, StyleSheet, View } from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#eee'
	},
	button: {
		margin: 10
	}
});

export default class App extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<Button
						label="My button 1"
						style={ styles.button }
						onPress={ () => Alert.alert('Button 1 pressed!') }
				/>
				<Button
						label="My button 2"
						style={ styles.button }
						onPress={ () => Alert.alert('Button 2 pressed!') }
				/>
				<Button
						label="My button 3"
						style={ styles.button }
						onPress={ () => Alert.alert('Button 3 pressed!') }
				/>
			</View>
		);
	}
}
