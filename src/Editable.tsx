import * as React from 'react';
import { FC } from 'react';
import {
  Blockquote,
  Code,
  EditableText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  IEditableTextProps,
  Label,
  Pre,
  Text,
} from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { Errorcito } from './util/Errorcito';

export const TYPES = {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  Pre,
  Text,
};

export type EditableProps = InputComponentProps<string> &
  Partial<IEditableTextProps> & { textType?: keyof typeof TYPES };

export const Editable: FC<EditableProps> = ({ textType = 'Text', ...props }) => (
  <>
    {React.createElement(
      TYPES[textType] || 'div',
      { className: props.className },
      <Errorcito error={props.error} style={{ marginBottom: 4 }} />,
      <EditableText
        placeholder={props.placeholder || props.label}
        {...props}
        value={props.value}
        onChange={props.onChange}
        intent={props.error || props.customError ? 'danger' : props.intent}
      />,
    )}
  </>
);
