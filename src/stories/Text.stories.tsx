import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Components } from '../index';
import { TextProps } from '../Text';
import '../../styles.css';
import { Intent } from '@blueprintjs/core';

export default {
  title: 'Controls/Text',
  component: Components.Text,
  argTypes: {
    intent: { control: { type: 'select', options: Object.values(Intent) } },
  },
} as Meta;

const Template: Story<TextProps> = args => <Components.Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  className: '',
  defaultValue: '',
  disabled: false,
  error: '',
  fill: true,
  helperText: '',
  inline: false,
  intent: Intent.NONE,
  label: 'Label',
  labelInfo: '',
  large: false,
  leftElement: undefined,
  leftIcon: undefined,
  placeholder: 'Placeholder',
  rightElement: undefined,
  rightIcon: undefined,
  round: false,
  small: false,
  type: 'text',
  value: '',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  value: 'TEXT',
  error: 'This field only allows lowercase letters',
  helperText: '',
};
