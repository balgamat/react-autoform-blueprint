/*
import { useTranslation } from 'react-i18next';
import { MultiSelect } from '@blueprintjs/select';
import { Classes, FormGroup, MenuItem } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { append, includes, remove } from 'ramda';
import { showError as onError } from '../../utils/showError';
import { usePhotosQuery } from '../../apollo/generated.d';
import { debounce } from '../../utils/debounce';
import { Query } from 'react-apollo';
import { PHOTO } from '../../apollo/queries/PHOTOS';

export const SelectPhotos = <
  F extends Array<any>,
  P extends InputComponentProps<any, F, any>
>(
  props: P,
) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const debouncedQuery = debounce({
    fn: setQuery,
    ms: 300,
  });

  const { onChange, value } = props;

  useEffect(() => {
    onChange(value.map(v => (typeof v === 'object' ? v.id : v)) as F);
  }, []);

  const { data } = usePhotosQuery({
    variables: {
      page: 0,
      pageSize: 15,
      filters: JSON.stringify({
        where: {
          $or: {
            name: { $iLike: `%${query}%` },
            id: { $in: (props.value || []).map(i => i.id || i) },
          },
        },
      }),
    },
    onError,
    fetchPolicy: 'cache-and-network',
  });

  const options = data ? data.photos.data : [];
  const labelSelector = withLabel => o =>
    o ? (
      <div className={'d-flex w-100'}>
        <img src={o.photo} alt={o.name} height={48} />
        {withLabel && (
          <div
            className={'v-centered w-100'}
            style={{
              height: 48,
              marginLeft: 24,
              marginRight: 24,
              maxWidth: 400,
            }}
          >
            <h4>{o.name}</h4>
            <p>{o.description}</p>
          </div>
        )}
      </div>
    ) : null;

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
              active={includes(i.id, props.value)}
              icon={includes(i.id, props.value) ? 'tick' : 'blank'}
              onClick={handleClick}
              key={i.id}
              text={labelSelector(true)(i)}
            />
          )}
          noResults={<MenuItem disabled={true} text={t('NOTHING_FOUND')} />}
          fill
          placeholder={t('SELECT')}
          // @ts-ignore
          onItemSelect={i => props.onChange(append(i.id, props.value))}
          resetOnSelect
          items={options}
          tagRenderer={i => {
            return (
              <Query query={PHOTO} variables={{ id: i.id || i }}>
                {({ data, loading, error }) => {
                  if (loading) return t('LOADING_PHOTO', { id: i });
                  if (error) return t('ERROR_PHOTO', { id: i });
                  if (data) return data.photo.name;
                }}
              </Query>
            );
          }}
          tagInputProps={{
            onRemove: (tag, index) =>
              props.onChange(remove(index, 1, props.value) as F),
          }}
          popoverProps={{ minimal: true }}
          itemsEqual={(a, b) => a.id === b.id}
          selectedItems={props.value}
          onQueryChange={q => debouncedQuery(q)}
          query={query}
        />
      </div>
    </FormGroup>
  );
};
*/
