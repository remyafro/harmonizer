import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const name = localStorage.getItem('username');

export default () => (
	<Card>
		<CardHeader title="Welcome to the Dashboard" />
		<CardContent>
			Hi {name}
		</CardContent>
	</Card>
);