import {
  InputTextProps,
  InputText as PrimeInputText,
} from 'primereact/inputtext';

import {
  InputNumber as PrimeInputNumber,
  InputNumberProps,
} from 'primereact/inputnumber';

import { DropdownProps, Dropdown as PrimeDropdown } from 'primereact/dropdown';

import React from 'react';

const InputText = (props: InputTextProps) => {
  return <PrimeInputText {...props} />;
};

const Dropdown = (props: DropdownProps) => {
  return <PrimeDropdown {...props} />;
};

const InputNumber = (props: InputNumberProps) => {
  return <PrimeInputNumber {...props} />;
};

// const InputField = ({
//   type,
//   field,
// }: {
//   type: 'string' | 'number' | 'radio' | 'select';
//   field: FieldApi;
// }) => {
//   if (type === 'string') {
//     return <InputText value={} {...field} />;
//   }
//   return null;
// };

// const MyField = ({
//   defaultValue,
//   onChange,
//   onBlur,
//   type,
// }: {
//   defaultValue: string | number | readonly string[] | undefined;
//   onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
//   onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
//   type: 'string' | 'number' | 'radio' | 'select';
// }) => {
//   if (type === 'string') {
//     return (
//       <InputText
//         defaultValue={defaultValue}
//         onBlur={onBlur}
//         onChange={onChange}
//       />
//     );
//   } else if (type === 'select') {
//     return <Dropdown onChange={onChange} onBlur={onBlur} />;
//   }
//   return null;
// };

export { InputText, Dropdown, InputNumber };

// Validation
