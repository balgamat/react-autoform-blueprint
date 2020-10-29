import { Classes, FormGroup, Switch as SwitchComponent } from '@blueprintjs/core';
import React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { append, ifElse, includes, without } from 'ramda';

export const SwitchGroup = (props: InputComponentProps<string[], boolean>) => {
  const { options = [], optionLabelSelector = o => o } = props.inputProps || {};

  return (
    <FormGroup className={`${Classes.HEADING} mt-3`} label={props.label}>
      {options.map(option => (
        <SwitchComponent
          id={`${option}-switch`}
          key={`${option}-switch`}
          checked={includes(option)(props.value as any)}
          label={optionLabelSelector(option)}
          onChange={() =>
            props.onChange(ifElse(includes, without, append)(option)(props.value as any))
          }
        />
      ))}
    </FormGroup>
  );
};
