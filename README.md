# Fluent UI for React Autoform

> Fluent UI Components for React Autoform.

## Available components

- Checkbox
- ChoiceGroup
- ColorPicker
- ComboBox
- DatePicker
- Dropdown
- Rating
- Slider
- SpinButton
- SwatchColorPicker
- TextField
- Toggle

## Installation

Make sure you also have the base package installed with this one :

`yarn add @balgamat/react-autoform @balgamat/react-autoform-fluent-ui`

then import it and apply the UI kit to the Autoforms:

```typescript
import { customizeInputComponents } from '@balgamat/react-autoform';
import { useFluentUIComponents } from '@balgamat/react-autoform-fluent-ui';

useFluentUIComponents(customizeInputComponents);
```

## Example form with all components

```typescript jsx
import { useAutoform, validation, customizeInputComponents } from '@balgamat/react-autoform';
import { useFluentUIComponents } from '@balgamat/react-autoform-fluent-ui';

useFluentUIComponents(customizeInputComponents);

const App = () => {
  const fields = [
    {
      label: 'Color',
      path: 'color',
      id: 'color',
      locale: 'cs',
      type: 'ColorPicker',
      validation: validation.string().required(),
    },
    {
      label: 'Date',
      path: 'date',
      locale: 'cs',
      type: 'DatePicker',
      validation: validation.string().required(),
    },
    {
      label: 'Checkbox  1',
      path: 'checkbox1',
      type: 'Checkbox',
      validation: validation.bool(),
    },
    {
      label: 'Checkbox 2',
      path: 'checkbox2',
      type: 'Checkbox',
      validation: validation.bool(),
    },
    {
      label: 'Checkbox 3',
      path: 'checkbox3',
      type: 'Checkbox',
      validation: validation.bool(),
    },
    {
      label: 'ChoiceGroup',
      path: 'choiceGroup',
      type: 'ChoiceGroup',
      options: [{ data: 'Option A' }, { data: 'Option B' }],
      keyExtractor: (option: any) => option,
      labelExtractor: (option: any) => option,
      validation: validation.string().required(),
    },
    {
      label: 'ComboBox',
      path: 'combobox',
      type: 'ComboBox',
      options: [
        { data: 'Option A', key: 'A' },
        { data: 'Option B', key: 'B' },
      ],
      keyExtractor: (option: any) => option,
      labelExtractor: (option: any) => option,
      validation: validation.string().required(),
    },
    {
      label: 'Dropdown',
      path: 'dropdown',
      type: 'Dropdown',
      multiSelect: true,
      options: [
        { data: 'Option A', key: 'A' },
        { data: 'Option B', key: 'B' },
      ],
      keyExtractor: (option: any) => option,
      labelExtractor: (option: any) => option,
      validation: validation.string().required(),
    },
    {
      label: 'Rating',
      path: 'rating',
      id: 'rating',
      type: 'Rating',
    },
    {
      label: 'Slider',
      path: 'slider',
      type: 'Slider',
    },
    {
      label: 'SpinButton',
      path: 'spinButton',
      type: 'SpinButton',
    },
    {
      label: 'SwatchColorPicker',
      path: 'swatchColorPicker',
      type: 'SwatchColorPicker',
      id: 'swatchColorPicker',
      colors: { Oranžová: '#FA3', Zelená: '#AF3', Modrá: '#3AF' },
      cellShape: 'square',
    },
    {
      label: 'TextField',
      path: 'text',
      type: 'TextField',
    },
    {
      label: 'Toggle',
      path: 'toggle',
      type: 'Toggle',
    },
  ];

  const [obj, Form, validationResult] = useAutoform({ withFields: fields });

  return (
    <div>
      <div style={{ padding: 24 }}>{Form}</div>
      <div style={{ padding: 24 }}>
        Validation has <b>{validationResult.valid ? 'passed' : 'failed'}</b>.
        <br />
        This is the resulting object:
        <br />
        <pre>{JSON.stringify(obj, null, 2)}</pre>
      </div>
    </div>
  );
};
```
