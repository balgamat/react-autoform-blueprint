import * as React from 'react';
import { FC } from 'react';
import { IFormGroupProps, InputGroup, INumericInputProps, NumericInput } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { InputWrapper } from './util/InputWrapper';

export type NumberProps = InputComponentProps<number> &
  Partial<INumericInputProps> &
  Partial<IFormGroupProps>;

export const Number: FC<NumberProps> = ({ onChange, ...props }) => (
  <InputWrapper {...{ ...props, onChange }}>
    <NumericInput
      id={`${props.label}-input`}
      onValueChange={valueAsNumber => onChange(valueAsNumber)}
      fill
      placeholder={props.label}
      {...props}
      value={props.value === 0 ? undefined : props.value}
      intent={props.error || props.customError ? 'danger' : props.intent}
    />
  </InputWrapper>
);
