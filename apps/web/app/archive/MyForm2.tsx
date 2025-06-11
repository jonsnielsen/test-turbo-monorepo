/* eslint-disable react/no-children-prop */
'use client';

import React from 'react';
import { InputNumber, InputText } from '../FormElements';
import { useForm } from '@tanstack/react-form';

export interface IFormInput {
  valveSelector: string;
  isolationValve: string;
  minimumTemperature: number;
  maxTemperature: number;
  controlValve: string;
}

export function MyForm() {
  const { Field, state } = useForm({
    defaultValues: {
      controlValve: '',
      isolationValve: '',
      maxTemperature: 0,
      minimumTemperature: 0,
      valveSelector: '',
    },
  });

  return (
    <form style={{ display: 'flex' }}>
      <Field
        name="controlValve"
        validators={{
          onBlur: ({ value }) =>
            value.length < 10
              ? 'You must input more than 10 Characters'
              : undefined,
        }}
        children={(field) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputText
              required
              defaultValue={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {!field.state.meta.isValid && (
              <em role="alert">{field.state.meta.errors.join(', ')}</em>
            )}
          </div>
        )}
      />

      <Field
        name="minimumTemperature"
        children={(field) => (
          <InputNumber
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.value || 0)}
            onBlur={field.handleBlur}
          />
        )}
      />
    </form>
  );
}

// export function MyForm() {
//   const { control } = useForm<IFormInput>({
//     defaultValues: {
//       controlValve: '',
//       isolationValve: '',
//       maxTemperature: 0,
//       minimumTemperature: 0,
//       valveSelector: '',
//     },
//   });

//   return (
//     <form>
//       {/* {form1.map((formEntry) => {
//         if (formEntry.inputType === 'text') {
//           return (
//             <Field type="string" />

//             <Controller
//               key={formEntry.id}
//               name={formEntry.id}
//               rules={{ required: formEntry.required }}
//               control={control}
//               render={({ field }) => <InputText {...field} />}
//             />
//           );
//           // return <InputText {...register} key={formEntry.id} />;
//         }
//       })} */}
//     </form>
//   );
// }

// // export function MyForm2() {
// //   const { register } = useForm();

// //   return (
// //     <form>
// //       {form1.map((formEntry) => {
// //         <FormEntry {...formEntry} />
// //       })}
// //     </form>
// //   );
// // }

// // const FormEntry = (inputType: 'text' | 'number') => {
// //   if (inputType === "text") {
// //     return <InputText {} />
// //   }
// // }

// {
//   /* <Field type="string" required="true"  maxLength={20} />
// <Field type="number" required="true"  maxLength={20} /> */
// }
