import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from "./components/users";
import {PostCreate, PostEdit, Postlist} from "./components/posts";
import Dashboard from "./components/dashboard";
import authProvider from "./authProvider";
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
	<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
		<Resource name="posts" list={Postlist} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
		<Resource name="users" list={UserList} icon={UserIcon}/>
	</Admin>
);

export default App;
