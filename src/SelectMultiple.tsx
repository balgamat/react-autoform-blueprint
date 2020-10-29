import { useTranslation } from 'react-i18next';
import { MultiSelect } from '@blueprintjs/select';
import { Classes, FormGroup, MenuItem } from '@blueprintjs/core';
import React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { append, find, includes, remove } from 'ramda';

export const SelectMultiple = <
  F extends Array<any>,
  P extends InputComponentProps<any, F, any>
>(
  props: P,
) => {
  const { t } = useTranslation();
  const inputProps: any = props.inputProps || {};

  return (
    <FormGroup
      className={`${Classes.HEADING} mt-3`}
      label={props.label}
      labelFor={`${props.label}-select`}
    >
      <div id={`${props.label}-select`}>
        <MultiSelect
          itemRenderer={(i, { handleClick, modifiers }) => (
            <MenuItem
              active={modifiers.active}
              icon={
                find(
                  s =>
                    inputProps.optionIdentifierSelector!(s) ===
                    inputProps.optionIdentifierSelector!(i),
                  props.value,
                )
                  ? 'tick'
                  : 'blank'
              }
              onClick={handleClick}
              key={inputProps.optionLabelSelector!(i)}
              text={inputProps.optionLabelSelector!(i)}
            />
          )}
          itemPredicate={(q, i) =>
            q === '' ||
            includes(
              q.toLowerCase(),
              inputProps.optionLabelSelector!(i).toLowerCase(),
            )
          }
          noResults={<MenuItem disabled={true} text={t('NOTHING_FOUND')} />}
          fill
          placeholder={t('SELECT')}
          // @ts-ignore
          onItemSelect={i => props.onChange(append(i, props.value))}
          resetOnSelect
          items={inputProps.options!}
          tagRenderer={inputProps.optionLabelSelector!}
          tagInputProps={{
            onRemove: (tag, index) =>
              props.onChange(remove(index, 1, props.value) as F),
          }}
          popoverProps={{ minimal: true }}
          itemsEqual={(a, b) =>
            inputProps.optionIdentifierSelector!(a) ===
            inputProps.optionIdentifierSelector!(b)
          }
          selectedItems={props.value}
          {...props.inputProps}
        />
      </div>
    </FormGroup>
  );
};
