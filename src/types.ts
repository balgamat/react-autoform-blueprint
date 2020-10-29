import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { IDropdownOption } from 'office-ui-fabric-react/lib/DropDown';

export interface ChoiceGroupOption<O> extends Partial<IChoiceGroupOption> {
  data: O;
};

export interface ComboBoxOption<O> extends Partial<IComboBoxOption> {
  data: O;
}

export interface DropdownOption<O> extends Partial<IDropdownOption> {
  data: O;
}

export interface IOptions<T extends {data: unknown}> {
  options: T[];
  keyExtractor(option: T['data']): string;
  labelExtractor(option: T['data']): string;
}
