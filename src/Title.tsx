import * as React from 'react';
import { FC } from 'react';
import { EditableText, IEditableTextProps } from '@blueprintjs/core';
import { InputComponentProps } from '@balgamat/react-autoform';
import { Errorcito } from './util/Errorcito';

export type TitleProps = InputComponentProps<string> & Partial<IEditableTextProps>;

export const Title: FC<TitleProps> = props => (
  <>
    <h1>
      <Errorcito error={props.error} style={{ marginBottom: 4 }} />
      <EditableText
        placeholder={props.placeholder || props.label}
        {...props}
        value={props.value}
        onChange={props.onChange}
        intent={props.error || props.customError ? 'danger' : props.intent}
      />
    </h1>
  </>
);
