import * as React from 'react';
import { IFormGroupProps } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { DateInput as Input, IDateInputProps } from '@blueprintjs/datetime';
import { InputWrapper } from './util/InputWrapper';
import { FC } from 'react';
import { localeUtils } from './util/localeUtils';

export type DateProps = InputComponentProps &
  Partial<IFormGroupProps> &
  Partial<IDateInputProps> & { locale?: string };

export const DateInput: FC<DateProps> = props => (
  <InputWrapper {...props}>
    <Input
      fill
      placeholder={'DD.MM.20XX'}
      formatDate={date => (props.timePrecision ? date.toLocaleString() : date.toLocaleDateString())}
      locale={props.locale || 'en'}
      parseDate={str => new Date(str)}
      {...props}
      onChange={props.onChange}
      value={new Date(props.value) || undefined}
      localeUtils={localeUtils}
    />
  </InputWrapper>
);
