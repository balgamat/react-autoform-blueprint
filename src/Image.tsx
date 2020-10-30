import { FileInput, IInputGroupProps } from '@blueprintjs/core';
import * as React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { useTranslation } from 'react-i18next';
import { pathOr } from 'ramda';
import { CSSProperties, FC } from 'react';
import { InputWrapper } from './util/InputWrapper';

export type ImageProps = InputComponentProps<File> &
  IInputGroupProps & {
    imageStyle?: CSSProperties;
    previewHeight?: number;
    imageProps: HTMLImageElement;
  };

export const Image: FC<InputComponentProps> = ({ onChange, value, ...props }) => {
  const { t } = useTranslation('autoform');

  return (
    <InputWrapper {...{ onChange, value, ...props }}>
      {value && (
        <div
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: 1,
            maxHeight: props.previewHeight || 300,
            ...props.imageStyle,
          }}
        >
          <img
            src={typeof value === 'string' ? value : URL.createObjectURL(value)}
            alt={props.label}
            width={'100%'}
            {...props.imageProps}
          />
        </div>
      )}
      <FileInput
        fill
        buttonText={t('BLUEPRINT.BROWSE', ' ... ')}
        disabled={false}
        hasSelection={!!value}
        {...props}
        inputProps={{ accept: 'image/*', ...props.inputProps }}
        text={pathOr(t('BLUEPRINT.CHOOSE_IMAGE', 'Choose image...'), ['name'], value) as string}
        onInputChange={({
          target: {
            validity,
            files: [file],
          },
        }: any) => validity.valid && onChange(file)}
      />
    </InputWrapper>
  );
};
