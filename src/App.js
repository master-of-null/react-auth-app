import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp(
			{
				apiKey: 'AIzaSyDqqiM4Lwh9TQTMBrjLdeWIBSUgQtYoyJM',
				authDomain: 'firstreactauthproject.firebaseapp.com',
				databaseURL: 'https://firstreactauthproject.firebaseio.com',
				projectId: 'firstreactauthproject',
				storageBucket: 'firstreactauthproject.appspot.com',
				messagingSenderId: '945444488791'
			}
		);

	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
};

export default App;
