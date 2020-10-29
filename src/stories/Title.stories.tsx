import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Components } from '../index';
import { TextProps } from '../Text';
import '../../styles.css';
import { Intent } from '@blueprintjs/core';
import { TitleProps } from '../Title';

export default {
  title: 'Controls/Title',
  component: Components.Title,
  argTypes: {
    intent: { control: { type: 'select', options: Object.values(Intent) } },
  },
} as Meta;

const Template: Story<TitleProps> = args => <Components.Title {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  className: '',
  confirmOnEnterKey: true,
  defaultValue: '',
  disabled: false,
  error: '',
  fill: true,
  intent: Intent.NONE,
  label: 'Title',
  maxLength: 20,
  maxLines: 1,
  minLines: 1,
  minWidth: 300,
  multiline: false,
  placeholder: 'Placeholder',
  selectAllOnFocus: true,
  type: 'text',
  value: '',
};
