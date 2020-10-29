import {
  FormGroup,
  IFormGroupProps,
  ISwitchProps,
  Switch as SwitchComponent,
} from '@blueprintjs/core';
import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';

export type SwitchProps = InputComponentProps<boolean> &
  Partial<ISwitchProps> &
  Partial<IFormGroupProps>;

export const Switch: FC<SwitchProps> = props => (
  <FormGroup>
    <SwitchComponent
      id={`${props.label}-switch`}
      {...props}
      checked={props.value}
      label={props.label}
      onChange={() => props.onChange(!props.value)}
    />
  </FormGroup>
);
