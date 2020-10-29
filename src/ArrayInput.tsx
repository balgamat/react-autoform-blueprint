import React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { Button, Card, Classes, FormGroup } from '@blueprintjs/core';
import { adjust, always, append, remove } from 'ramda';

export const ArrayInput = <T extends NonNullable<object>>(
  props: InputComponentProps<any, T[], any>,
) => {
  return (
    <FormGroup
      className={`${Classes.HEADING} mt-3`}
      label={props.label}
      labelFor={`${props.label}-input`}
    >
      {props.value.map((i, idx) => (
        <Card key={`${props.inputProps!.key}-${idx}`} className={'d-flex'}>
          <div style={{ flex: 1 }}>
            {props.inputProps!.ItemComponent({
              o: i,
              updateFn: (value: T) =>
                props.onChange(adjust(idx, always(value), props.value)),
            })}
          </div>
          <div className={'d-flex justify-content-center flex-column'}>
            <Button
              onClick={() => props.onChange(remove(idx, 1, props.value))}
              intent={'danger'}
              icon="cross"
              small
            />
          </div>
        </Card>
      ))}
      <Button
        onClick={() => props.onChange(append({} as T, props.value))}
        className="mb-3"
        icon="add"
        fill
      />
    </FormGroup>
  );
};
