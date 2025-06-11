'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { form1 } from '../../form';

export interface IFormInput {
  valveSelector: string;
  isolationValve: string;
  minimumTemperature: number;
  maxTemperature: number;
  controlValve: string;
}

export function MyForm() {
  const { control } = useForm<IFormInput>({
    defaultValues: {
      controlValve: '',
      isolationValve: '',
      maxTemperature: 0,
      minimumTemperature: 0,
      valveSelector: '',
    },
  });

  return (
    <form>
      <Field control={control} name="controlValve" type="string" />
      <InputText
        defaultValue={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {/* <Field control={control} type="string" /> */}
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
