import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Components } from '../index';
import '../../styles.css';
import { Intent } from '@blueprintjs/core';
import { EditableProps, TYPES } from '../Editable';

export default {
  title: 'Controls/Editable',
  component: Components.Editable,
  argTypes: {
    intent: { control: { type: 'select', options: Object.values(Intent) } },
    textType: { control: { type: 'select', options: Object.keys(TYPES) } },
  },
} as Meta;

const Template: Story<EditableProps> = args => <Components.Editable {...args} />;

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
  placeholder: 'You can edit this quote. Said me.',
  selectAllOnFocus: true,
  textType: 'Blockquote',
  type: 'text',
  value: '',
};
