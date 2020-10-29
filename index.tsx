import React from 'react';
import { Checkbox } from './src/Checkbox';
import { ChoiceGroup } from './src/ChoiceGroup';
import { ColorPicker } from './src/ColorPicker/ColorPicker';
import { ComboBox } from './src/ComboBox';
import { DatePicker } from './src/DatePicker/DatePicker';
import { Dropdown } from './src/Dropdown';
import { initializeIcons } from '@uifabric/icons';
import { Rating } from './src/Rating';
import { Slider } from './src/Slider';
import { SpinButton } from './src/SpinButton';
import { SwatchColorPicker } from './src/SwatchColorPicker';
import { TextField } from './src/TextField';
import { Toggle } from './src/Toggle';
import { ComponentsDictionary } from '@balgamat/react-autoform';

const Components = {
  Checkbox,
  ChoiceGroup,
  ColorPicker,
  ComboBox,
  DatePicker,
  Dropdown,
  Rating,
  Slider,
  SpinButton,
  SwatchColorPicker,
  TextField,
  Toggle,
};

const useFluentUIComponents = (
  customizeInputComponents: <T>(components: ComponentsDictionary) => void,
) => {
  initializeIcons();
  customizeInputComponents({
    Checkbox,
    ChoiceGroup,
    ColorPicker,
    ComboBox,
    DatePicker,
    Dropdown,
    Rating,
    Slider,
    SpinButton,
    SwatchColorPicker,
    TextField,
    Toggle,
  });
};

export { useFluentUIComponents, Components };
