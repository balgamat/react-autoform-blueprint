import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { IFormGroupProps, ITextAreaProps, TextArea as TextAreaComponent } from '@blueprintjs/core';
import { InputWrapper } from './util/InputWrapper';

export type TextAreaProps = InputComponentProps<string> &
  Partial<ITextAreaProps> &
  Partial<IFormGroupProps>;

export const TextArea: FC<TextAreaProps> = props => (
  <InputWrapper {...props}>
    <TextAreaComponent
      fill={true}
      large={true}
      id={`${props.label}-input`}
      {...props}
      intent={props.error || props.customError ? 'danger' : props.intent}
      onChange={({ target: { value } }) => props.onChange(value)}
      value={props.value}
    />
  </InputWrapper>
);
