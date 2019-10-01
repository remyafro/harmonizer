import React from 'react';
import { List,
	Datagrid,
	TextField,
	ReferenceField,
	EditButton,
	Edit,
	SimpleForm,
	DisabledInput,
	ReferenceInput,
	SelectInput,
	TextInput,
	LongTextInput,
	Create,
	Filter,
	} from 'react-admin';

const PostTitle = ({ record }) => {
	return <span>Hello {record ? `"${record.title}"` : ''}</span>
};

const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn/>
		<ReferenceInput label="User" source="userId" reference="users" allowEmpty>
		<SelectInput optionText="name"/>
		</ReferenceInput>
	</Filter>
);

export const Postlist = props => (
	<List filters={<PostFilter/>}{...props}>
		<Datagrid rowClick="edit">
			<ReferenceField source="userId" reference="users">
				<TextField source="name" />
			</ReferenceField>
			<TextField source="id" />
			<TextField source="title" />
			<EditButton/>
		</Datagrid>
	</List>
);

export const PostEdit = props => (
	<Edit title={<PostTitle/>} {...props}>
		<SimpleForm>
			<DisabledInput source="id"/>
				<ReferenceInput source="userId" reference="users">
					<SelectInput optionText="name" />
				</ReferenceInput>
					<TextInput source="title" />
					<LongTextInput source="body" />
		</SimpleForm>
	</Edit>
);

export const PostCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<LongTextInput source="body" />
		</SimpleForm>
	</Create>
);