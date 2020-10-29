import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Components } from '../index';
import { TextProps } from '../Text';
import '../../styles.css';
import { Alignment, Intent } from '@blueprintjs/core';
import { SwitchProps } from '../Switch';

export default {
  title: 'Controls/Switch',
  component: Components.Switch,
  argTypes: {
    intent: { control: { type: 'select', options: Object.values(Intent) } },
    alignIndicator: { control: { type: 'select', options: Object.values(Alignment) } },
  },
} as Meta;

const Template: Story<SwitchProps> = args => <Components.Switch {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  alignIndicator: 'left',
  className: '',
  disabled: false,
  inline: false,
  innerLabel: '',
  innerLabelChecked: '',
  label: 'Label',
  large: false,
  value: false,
};
