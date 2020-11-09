import { IOptions } from './types';
import { find, identity, propEq } from 'ramda';

export const prepareOptions = <T extends Partial<IOptions<T>>>(props: T) => {
  if (!props.options)
    throw new Error(
      `You have to provide the \`options\` prop.\nYour props: ${JSON.stringify(props, null, 2)}`,
    );

  const keyExtractor = props.keyExtractor || identity;
  const labelExtractor = props.labelExtractor || identity;

  const options = props.options.map(option => ({
    ...option,
    key: option.key || keyExtractor(option.data as any),
    label: option.label || labelExtractor(option.data as any),
  }));

  const getOptionFromValue = (value: unknown): IOptions['options'][0] =>
    find(propEq('data', value), options)!;

  return { options, getOptionFromValue };
};
