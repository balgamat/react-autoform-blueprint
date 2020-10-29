import {
  Button,
  Classes,
  FormGroup,
  IButtonProps,
  IFormGroupProps,
  ISwitchProps,
  MenuItem,
  Spinner,
} from '@blueprintjs/core';
import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { ISelectProps, Select as SelectComponent } from '@blueprintjs/select';
import { useTranslation } from 'react-i18next';
import { includes } from 'ramda';
import { IOptions } from './util/types';
import { InputWrapper } from './util/InputWrapper';

export type SelectProps = InputComponentProps &
  Partial<ISelectProps<any>> &
  Partial<IFormGroupProps> &
  IOptions<any> & { loading?: boolean; buttonProps?: Partial<IButtonProps> };

export const Select: FC<SelectProps> = props => {
  const { t } = useTranslation();
  const inputProps = props.inputProps || {};

  if (!props.options)
    throw new Error(
      `You have to provide \`options\` prop.\nYour props: ${JSON.stringify(props, null, 2)}`,
    );

  const options = props.options.map(option => ({
    ...option,
    key: option.key || props.keyExtractor(option.data),
    text: option.text || props.labelExtractor(option.data),
  }));

  return (
    <InputWrapper {...props}>
      <SelectComponent
        // @ts-ignore
        id={`${props.label}-select`}
        {...props}
        value={props.value}
        items={props.options!}
        filterable={props.filterable || false}
        itemRenderer={(i, { handleClick }) => (
          <MenuItem
            icon={
              props.optionIdentifierSelector!(props.value) ===
              inputProps.optionIdentifierSelector!(i)
                ? 'tick'
                : 'blank'
            }
            onClick={handleClick}
            key={inputProps.optionLabelSelector!(i) as string}
            text={inputProps.optionLabelSelector!(i)}
          />
        )}
        itemPredicate={
          props.filterable
            ? (q, i) =>
                includes(
                  q.toLowerCase(),
                  (inputProps.optionLabelSelector!(i) as string).toLowerCase(),
                )
            : undefined
        }
        noResults={<MenuItem disabled={true} text={t('NOTHING_FOUND')} />}
        onItemSelect={i => props.onChange(i)}
        resetOnSelect
        itemsEqual={(a, b) =>
          inputProps.optionIdentifierSelector!(a) === inputProps.optionIdentifierSelector!(b)
        }
        popoverProps={{ minimal: true }}
        inputProps={{
          placeholder: t('FILTER'),
          onBlur: e => e.target.focus(),
          id: 'openedFilterInput',
        }}
        {...props}
      >
        {/* children become the popover target; render value here */}
        <Button fill rightIcon="double-caret-vertical" {...props.buttonProps}>
          {props.loading ? (
            <Spinner size={20} />
          ) : props.value && includes(props.value, props.options!) ? (
            inputProps.optionLabelSelector!(props.value)
          ) : (
            props.defaultLabel || t('SELECT')
          )}
        </Button>
      </SelectComponent>
    </InputWrapper>
  );
};
