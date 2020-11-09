import * as React from 'react';
import { append, ifElse, includes, without } from 'ramda';
import { FC } from 'react';
import { IFormGroupProps, ISwitchProps, Switch as SwitchComponent } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { InputWrapper } from './util/InputWrapper';
import { IOptions } from './util/types';
import { prepareOptions } from './util/prepareOptions';

export type SwitchGroupProps = InputComponentProps &
  Partial<ISwitchProps> &
  Partial<IOptions> &
  Partial<IFormGroupProps>;

export const Preferences: FC<SwitchGroupProps> = props => {
  const { options } = prepareOptions(props);

  return (
    <InputWrapper {...props}>
      {options.map(option => (
        <SwitchComponent
          {...props}
          id={`${option.label}-switch`}
          key={`${option.label}-switch`}
          checked={includes(option.data, props.value || [])}
          onChange={() =>
            props.onChange(ifElse(includes, without, append)(option.data)(props.value || []))
          }
          inline={props.inlineSwitches ?? false}
          label={option.label}
        />
      ))}
    </InputWrapper>
  );
};
