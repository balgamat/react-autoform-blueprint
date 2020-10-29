import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Components } from '../index';
import { TextAreaProps } from '../TextArea';
import '../../styles.css';
import { Intent } from '@blueprintjs/core';

export default {
  title: 'Controls/TextArea',
  component: Components.TextArea,
  argTypes: {
    intent: { control: { type: 'select', options: Object.values(Intent) } },
  },
} as Meta;

const Template: Story<TextAreaProps> = args => <Components.TextArea {...args} />;

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
  growVertically: true,
  placeholder: 'Placeholder',
  round: false,
  small: false,
  value: '',
};
