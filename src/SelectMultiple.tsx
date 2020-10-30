import { useTranslation } from 'react-i18next';
import { IMultiSelectProps, MultiSelect } from '@blueprintjs/select';
import { IButtonProps, IFormGroupProps, MenuItem } from '@blueprintjs/core';
import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { append, ifElse, includes, remove, without } from 'ramda';
import { IOptions } from './util/types';
import { prepareOptions } from './util/prepareOptions';
import { InputWrapper } from './util/InputWrapper';

export type SelectMultipleProps = InputComponentProps &
  Partial<IMultiSelectProps<any>> &
  Partial<IFormGroupProps> &
  IOptions & {
    loading?: boolean;
    buttonProps?: Partial<IButtonProps>;
  };

export const SelectMultiple: FC<SelectMultipleProps> = props => {
  const { t } = useTranslation('AUTOFORM_BLUEPRINT');
  const { options, getOptionFromValue } = prepareOptions(props);

  return (
    <InputWrapper {...props}>
      <div id={`${props.label}-select`}>
        <MultiSelect<IOptions['options'][0] & { disabled?: boolean }>
          itemRenderer={(i, { handleClick, modifiers }) => {
            const isTicked = includes(i.data, props.value || []);
            return (
              <MenuItem
                active={modifiers.active}
                icon={isTicked ? 'tick' : 'blank'}
                onClick={handleClick}
                key={i.key}
                text={i.label}
                intent={isTicked ? 'primary' : 'none'}
              />
            );
          }}
          itemPredicate={(q, i) => includes(q.toLowerCase(), i.label.toLowerCase())}
          noResults={<MenuItem disabled={true} text={t('NOTHING_FOUND')} />}
          fill
          placeholder={t('SELECT')}
          onItemSelect={i =>
            props.onChange(ifElse(includes, without, append)(i.data)(props.value || []))
          }
          resetOnSelect
          popoverProps={{ minimal: true }}
          itemDisabled={'disabled' as any}
          items={options}
          tagRenderer={(o: IOptions['options'][0]) => (o ? getOptionFromValue(o).label : null)}
          tagInputProps={{
            onRemove: (tag, index) => props.onChange(remove(index, 1, props.value)),
          }}
          {...props}
          itemsEqual={(a, b) => a.key === b.key}
          selectedItems={props.value}
        />
      </div>
    </InputWrapper>
  );
};
