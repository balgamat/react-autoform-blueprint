import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Components } from '../index';
import { TextProps } from '../Text';
import '../../styles.css';
import { Intent } from '@blueprintjs/core';
import { TitleProps } from '../Title';
import {
  Autoform,
  AutoformHookParams,
  customizeInputComponents,
  useAutoform,
  validation,
} from '@balgamat/react-autoform';

export default {
  title: 'Form',
  component: Autoform,
} as Meta;

const Template: Story<AutoformHookParams<any>> = args => {
  customizeInputComponents(Components);
  const [editedObj, Form, validationResult] = useAutoform({
    onObject: args.onObject || {},
    withFields: args.withFields,
  });

  return (
    <div>
      <form style={{ padding: 24 }}>{Form}</form>
      <div style={{ padding: 24 }}>
        Validation has <b>{validationResult.valid ? 'passed' : 'failed'}</b>.
        <br />
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
      label: 'Something about yourself',
      path: 'description',
      type: 'TextArea',
    },
    {
      label: 'I accept the Terms & Conditions',
      path: 'terms',
      type: 'Switch',
    },
  ],
};
