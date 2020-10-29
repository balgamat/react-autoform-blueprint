import * as React from 'react';
import { FC } from 'react';
import { IFormGroupProps, IInputGroupProps, InputGroup } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { InputWrapper } from './util/InputWrapper';

export type TextProps = InputComponentProps<string> &
  Partial<IInputGroupProps> &
  Partial<IFormGroupProps> & { inputType?: IInputGroupProps['type'] };

export const Text: FC<TextProps> = props => (
  <InputWrapper {...props}>
    <InputGroup
      id={`${props.label}-input`}
      {...props}
      intent={props.error || props.customError ? 'danger' : props.intent}
      onChange={({ target: { value } }: any) => props.onChange(value)}
      type={props.inputType}
    />
  </InputWrapper>
);
