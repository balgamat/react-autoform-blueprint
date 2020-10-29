/*
import React from 'react';
import { Classes, FormGroup } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { parse } from 'date-fns/fp';
import { DateInput as Input } from '@blueprintjs/datetime';

export const DateInput = <T, P extends InputComponentProps<T, Date>>(
  props: P,
) => (
  <FormGroup
    className={`${Classes.HEADING} mt-3`}
    label={props.label}
    labelFor={`${props.label}-input`}
  >
    <Input
      fill
      placeholder={'DD.MM.20XX'}
      formatDate={date => date.toLocaleDateString()}
      locale={'cs_CZ'}
      onChange={props.onChange}
      parseDate={str => parse(new Date(), 'dd.M.Y', str)}
      value={props.value || null}
    />
  </FormGroup>
);
*/
