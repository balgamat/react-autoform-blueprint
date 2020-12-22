import * as React from 'react';
import { CSSProperties, FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { Classes, FormGroup } from '@blueprintjs/core';
import { Errorcito } from './Errorcito';

export const InputWrapper: FC<InputComponentProps & { groupStyle?: CSSProperties }> = props => (
  <FormGroup
    className={`${Classes.HEADING}`}
    inline={props.inline}
    label={props.label}
    labelFor={`${props.label}-input`}
    labelInfo={
      props.error || props.customError ? (
        <Errorcito error={props.customError || props.error} />
      ) : (
        props.labelInfo
      )
    }
    disabled={props.disabled}
    helperText={props.helperText}
    intent={props.error || props.customError ? 'danger' : props.intent}
    style={props.groupStyle}
  >
    {props.children}
  </FormGroup>
);
