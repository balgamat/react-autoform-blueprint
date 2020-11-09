import * as React from 'react';
import { Autoform, Field, InputComponentProps } from '@balgamat/react-autoform';
import { Button, Card, IFormGroupProps } from '@blueprintjs/core';
import { adjust, always, append, remove } from 'ramda';
import { InputWrapper } from './util/InputWrapper';
import { FC } from 'react';

export type ListProps = InputComponentProps<any[]> &
  Partial<IFormGroupProps> & {
    fields?: Field<any>[];
    newObjectTemplate?: any;
  };

export const List: FC<ListProps> = props => {
  if (!props.fields)
    throw new Error(
      `You have to provide the \`fields\` prop for List component.\nYour props: ${JSON.stringify(
        props,
        null,
        2,
      )}`,
    );

  return (
    <InputWrapper {...props}>
      {(props.value || []).map((i, idx) => (
        <Card key={`${props.label}-element-${idx}`}>
          <div style={{ flex: 1 }}>
            <Autoform
              {...{
                fields: props.fields!,
                o: i,
                updateFn: value => props.onChange(adjust(idx, always(value), props.value)),
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              onClick={() => props.onChange(remove(idx, 1, props.value))}
              intent={'danger'}
              minimal
              icon="trash"
              small
            />
          </div>
        </Card>
      ))}
      <Button
        onClick={() => props.onChange(append(props.newObjectTemplate || {}, props.value || []))}
        className="mb-3"
        icon="add"
        intent={'primary'}
        minimal
        fill
        large
      />
    </InputWrapper>
  );
};
