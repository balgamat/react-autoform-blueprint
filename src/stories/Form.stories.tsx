import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Components } from '../index';
import '../../styles.css';
import {
  Autoform,
  AutoformHookParams,
  customizeInputComponents,
  useAutoform,
} from '@balgamat/react-autoform';

export default {
  title: 'Form',
  component: Autoform,
} as Meta;

const Template: Story<AutoformHookParams<any>> = args => {
  customizeInputComponents(Components);
  const [editedObj, Form] = useAutoform({
    onObject: args.onObject || {},
    withFields: args.withFields,
  });

  return (
    <div>
      <form style={{ padding: 24 }}>{Form}</form>
      <hr />
      <div style={{ padding: 24 }}>
        This is the resulting object:
        <br />
        <pre>{JSON.stringify(editedObj, null, 2)}</pre>
      </div>
    </div>
  );
};

export const Preview = Template.bind({});
Preview.args = {
  onObject: {
    title: 'This is a title',
    terms: true,
    age: 16,
    list: [
      {
        name: 'Ivan',
        surname: 'Tohavemore',
      },
      {
        name: 'Sam',
        surname: 'Otherfriend',
      },
    ],
    attachments: [{}],
    birthdate: '2001-11-26T22:00:00.000Z',
  },
  withFields: [
    {
      label: 'Title',
      path: 'title',
      type: 'Title',
      error: 'This is a serious error! Right here, in the title!',
    },
    {
      label: 'Subtitle',
      path: 'subtitle',
      type: 'Editable',
      textType: 'H4',
    },
    {
      label: 'Username',
      path: 'username',
      type: 'Text',
      groupStyle: { marginTop: 16 },
    },
    {
      label: 'Profile photo',
      path: 'photo',
      type: 'Image',
    },
    {
      label: 'Password',
      path: 'password',
      type: 'Text',
      inputType: 'password',
      error: 'Has to be at least 8 characters long',
    },
    {
      label: 'How old are you?',
      path: 'age',
      type: 'Number',
      min: 18,
      max: 99,
      customError: 'You have to be 18 or older to continue',
    },
    {
      label: 'So that means you were born.. when?',
      path: 'birthdate',
      type: 'Date',
    },
    {
      label: 'Gender',
      path: 'gender',
      type: 'Select',
      options: [
        { data: null, label: 'None' },
        { data: 'M', label: 'Male' },
        { data: 'F', label: 'Female' },
      ],
      fill: true,
    },
    {
      label: 'Or maybe you want to select more genders?',
      path: 'genderMulti',
      type: 'SelectMultiple',
      options: [
        { data: 'N/A', label: 'None' },
        { data: 'M', label: 'Male' },
        { data: 'F', label: 'Female' },
        { data: 'X', label: 'Trans' },
        { data: '0', label: 'Neutral' },
      ],
      fill: true,
    },
    {
      label: 'Here, you set up some preferences',
      path: 'preferences',
      type: 'Preferences',
      options: [
        { data: 'dogs', label: 'I adore doggos' },
        { data: 'cats', label: 'I totally dig felines' },
        { data: 'reptiles', label: 'I am a fool for reptiles' },
      ],
      inlineSwitches: true,
    },
    {
      label: 'Can you name your BFFs?',
      path: 'list',
      type: 'List',
      fields: [
        {
          label: 'Name',
          path: 'name',
          type: 'Text',
        },
        {
          label: 'Surname',
          path: 'surname',
          type: 'Text',
        },
      ],
    },
    {
      label: 'Something about yourself',
      path: 'description',
      type: 'TextArea',
    },
    {
      label: 'Maybe include some attachments?',
      path: 'attachments',
      type: 'List',
      fields: [
        {
          label: 'File',
          path: 'file',
          type: 'File',
        },
      ],
    },
    {
      label: 'I accept the Terms & Conditions',
      path: 'terms',
      type: 'Switch',
    },
  ],
};
