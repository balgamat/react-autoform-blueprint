# Blueprint for React Autoform

> Blueprint UI Components for React Autoform.

## Available components

- Date,
- Editable,
- File,
- Image,
- List,
- Number,
- Preferences,
- Select,
- SelectMultiple,
- Switch,
- Text,
- TextArea,
- Title,

## Installation

Make sure you also have the base package installed with this one :

`yarn add @balgamat/react-autoform @balgamat/react-autoform-blueprint`

then import it and apply the UI kit to the Autoforms:

```typescript
import { customizeInputComponents } from '@balgamat/react-autoform';
import { Components as BlueprintComponents } from '@balgamat/react-autoform-blueprint';

customizeInputComponents(BlueprintComponents);
```

## Example

![image](https://user-images.githubusercontent.com/6381607/97701404-a67ff480-1aad-11eb-8b52-d9da8a87e51a.png)

```typescript jsx
const [editedObj, Form] = useAutoform({
  onObject: {},
  withFields: [
    {
      label: 'Title',
      path: 'title',
      type: 'Title',
      error: 'This is a serious error! Right here, in the title!',
    },
    {
      label: 'Subtitle',
      path: 'subtitle',
      type: 'Editable',
      textType: 'H4',
    },
    {
      label: 'Username',
      path: 'username',
      type: 'Text',
      groupStyle: { marginTop: 16 },
    },
    {
      label: 'Profile photo',
      path: 'photo',
      type: 'Image',
    },
    {
      label: 'Password',
      path: 'password',
      type: 'Text',
      inputType: 'password',
      error: 'Has to be at least 8 characters long',
    },
    {
      label: 'How old are you?',
      path: 'age',
      type: 'Number',
      min: 18,
      max: 99,
      customError: 'You have to be 18 or older to continue',
    },
    {
      label: 'So that means you were born.. when?',
      path: 'birthdate',
      type: 'Date',
    },
    {
      label: 'Gender',
      path: 'gender',
      type: 'Select',
      options: [
        { data: null, label: 'None' },
        { data: 'M', label: 'Male' },
        { data: 'F', label: 'Female' },
      ],
      fill: true,
    },
    {
      label: 'Or maybe you want to select more genders?',
      path: 'genderMulti',
      type: 'SelectMultiple',
      options: [
        { data: 'N/A', label: 'None' },
        { data: 'M', label: 'Male' },
        { data: 'F', label: 'Female' },
        { data: 'X', label: 'Trans' },
        { data: '0', label: 'Neutral' },
      ],
      fill: true,
    },
    {
      label: 'Here, you set up some preferences',
      path: 'preferences',
      type: 'Preferences',
      options: [
        { data: 'dogs', label: 'I adore doggos' },
        { data: 'cats', label: 'I totally dig felines' },
        { data: 'reptiles', label: 'I am a fool for reptiles' },
      ],
      inlineSwitches: true,
    },
    {
      label: 'Can you name your BFFs?',
      path: 'list',
      type: 'List',
      fields: [
        {
          label: 'Name',
          path: 'name',
          type: 'Text',
        },
        {
          label: 'Surname',
          path: 'surname',
          type: 'Text',
        },
      ],
    },
    {
      label: 'Something about yourself',
      path: 'description',
      type: 'TextArea',
    },
    {
      label: 'Maybe include some attachments?',
      path: 'attachments',
      type: 'List',
      fields: [
        {
          label: 'File',
          path: 'file',
          type: 'File',
        },
      ],
    },
    {
      label: 'I accept the Terms & Conditions',
      path: 'terms',
      type: 'Switch',
    },
  ],
});
```
