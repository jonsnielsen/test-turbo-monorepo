type Form = {
  inputType: 'text' | 'number';
  id:
    | 'valveSelector'
    | 'isolationValve'
    | 'controlValve'
    | 'maxTemperature'
    | 'minimumTemperature';
  validation?: string;
  required?: boolean;
};
export const form1: Form[] = [
  {
    inputType: 'text',
    validation: 'max 10',
    required: true,
    id: 'valveSelector',
  },
  {
    inputType: 'text',
    id: 'isolationValve',
  },
  {
    inputType: 'text',
    validation: 'email',
    id: 'controlValve',
  },
  {
    inputType: 'number',
    validation: 'not zero',
    id: 'maxTemperature',
  },
  {
    inputType: 'number',
    required: true,
    id: 'minimumTemperature',
  },
];
