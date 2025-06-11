import React from 'react';

import { useFormContext } from 'react-hook-form';
import { SelectFieldAttributes } from '../../models/FieldAttributes';
import { Dropdown } from 'primereact/dropdown';

const SelectField: React.FC<SelectFieldAttributes> = ({
  label,
  name,
  options,
  placeholder,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Dropdown
        options={options}
        {...register(name)}
        id={name}
        placeholder={placeholder}
      ></Dropdown>
    </div>
  );
};

export default SelectField;
