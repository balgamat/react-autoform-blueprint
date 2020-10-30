import { FileInput as Input, IInputGroupProps } from '@blueprintjs/core';
import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { useTranslation } from 'react-i18next';
import { pathOr } from 'ramda';
import { InputWrapper } from './util/InputWrapper';

export type FileInputProps = InputComponentProps<File> & IInputGroupProps;

export const FileInput: FC<InputComponentProps> = ({ onChange, value, ...props }) => {
  const { t } = useTranslation('AUTOFORM_BLUEPRINT');

  return (
    <InputWrapper {...{ onChange, value, ...props }}>
      <Input
        fill
        buttonText={t('BROWSE')}
        disabled={false}
        hasSelection={!!value}
        {...props}
        text={pathOr(t('CHOOSE_FILE'), ['name'], value) as string}
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
