import { Button, IButtonProps, IFormGroupProps, MenuItem, Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { FC, useCallback, useContext } from 'react';
import { AutoformTranslation, InputComponentProps } from '@balgamat/react-autoform';
import { ISelectProps, Select as SelectComponent } from '@blueprintjs/select';
import { useTranslation } from 'react-i18next';
import { find, identity, includes, propEq } from 'ramda';
import { IOptions } from './util/types';
import { InputWrapper } from './util/InputWrapper';
import { prepareOptions } from './util/prepareOptions';

export type SelectProps = InputComponentProps &
  Partial<ISelectProps<any>> &
  Partial<IFormGroupProps> &
  Partial<IOptions> & {
    loading?: boolean;
    buttonProps?: Partial<IButtonProps>;
  };

export const Select: FC<SelectProps> = props => {
  const t = useContext(AutoformTranslation);
  const { options, getOptionFromValue } = prepareOptions(props);

  return (
    <InputWrapper {...props}>
      <SelectComponent
        filterable={props.filterable || false}
        itemRenderer={(i, { handleClick, modifiers: { active } }) => {
          const isTicked = props.value === i.data;
          return (
            <MenuItem
              icon={isTicked ? 'tick' : 'blank'}
              onClick={handleClick}
              key={i.key}
              text={i.label}
              intent={isTicked ? 'primary' : 'none'}
            />
          );
        }}
        itemPredicate={
          props.filterable ? (q, i) => includes(q.toLowerCase(), i.label.toLowerCase()) : undefined
        }
        noResults={
          <MenuItem disabled={true} text={t('BLUEPRINT.NOTHING_FOUND', 'Nothing found')} />
        }
        onItemSelect={i => props.onChange(i.data)}
        resetOnSelect
        itemsEqual={(a, b) => a.key === b.key}
        popoverProps={{ minimal: true }}
        inputProps={{
          placeholder: t('BLUEPRINT.SEARCH', 'Search...'),
          onBlur: e => e.target.focus(),
          id: `opened-filter-input-${props.label}`,
        }}
        {...props}
        // @ts-ignore
        id={`${props.label}-select`}
        value={props.value}
        items={options}
      >
        {/* children become the popover target; render value here */}
        <Button fill rightIcon="double-caret-vertical" {...props.buttonProps}>
          {props.loading ? (
            <Spinner size={20} />
          ) : (
            getOptionFromValue(props.value)?.label ||
            props.defaultLabel ||
            t('BLUEPRINT.SELECT', 'Select...')
          )}
        </Button>
      </SelectComponent>
    </InputWrapper>
  );
};
