import { FileInput } from '@blueprintjs/core';
import React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { useTranslation } from 'react-i18next';
import { pathOr } from 'ramda';

export const Picture = <T extends any>(props: InputComponentProps<T, File>) => {
  const { t } = useTranslation();
  const inputProps = props.inputProps || {};

  return (
    <div className={'mb-3 w-100'}>
      {props.value && (
        <div
          style={{
            flex: '1 1 auto',
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            padding: 1,
            maxHeight: 300,
          }}
        >
          <img
            className={'offer-photo'}
            src={typeof props.value === 'string' ? props.value : URL.createObjectURL(props.value)}
            alt={props.label}
            width={'100%'}
          />
        </div>
      )}
      <FileInput
        className={'w-100'}
        buttonText={t('BROWSE')}
        disabled={false}
        hasSelection={!!props.value}
        inputProps={{ accept: 'image/*' }}
        text={pathOr(t('CHOOSE_PHOTO'), ['name'], props.value) as string}
        onInputChange={({
          target: {
            validity,
            files: [file],
          },
        }: any) => validity.valid && props.onChange(file)}
        {...inputProps}
      />
    </div>
  );
};
