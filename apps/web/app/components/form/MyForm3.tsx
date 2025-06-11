'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Field from './components/Field';
import { FieldType } from './models/FieldAttributes';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Fieldgroup from './components/Fieldgroup';

const schema = z.object({
  testText: z.string().min(5, 'must be more than 5 characters'),
  testText2: z
    .string()
    .min(
      5,
      'must be more than 5 characters must be more than 5 characters must be more than 5 characters must be more than 5 characters',
    ),
  testText3: z.string().min(5, 'must be more than 5 characters'),
});

export function MyForm() {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      testText: '',
    },
    resolver: zodResolver(schema),
  });
  console.log({ schema });

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };
  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmitHandler)}>
        {/* {formSchema.map((field) => (
          <Field {...field} key={field.label} />
        ))} */}

        <Fieldgroup>
          <Field
            type={FieldType.SELECT}
            label="test"
            name="test"
            options={[{ label: 'Hello', value: 'A' }]}
          />
          <Field type={FieldType.TEXT} label="Test text" name="testText" />
          <Field type={FieldType.TEXT} label="Test text2" name="testText2" />
          <Field type={FieldType.TEXT} label="Test text3" name="testText3" />
          <Field
            type={FieldType.CHECKBOX}
            name="someCheckbox"
            label="I have read and understood the privacy agreement"
            key="hello"
          />
        </Fieldgroup>
        <Fieldgroup>
          <Field
            type={FieldType.SELECT}
            label="example"
            name="someExample"
            options={[{ label: 'Hello', value: 'A' }]}
          />
          <Field
            type={FieldType.CHECKBOX}
            name="someOtherCheckbox"
            label="I agree"
            key="hello"
          />
        </Fieldgroup>
        <button type="submit">Submit</button>
      </form>

      {/* display the values of the form on the page */}
      <section>
        <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
      </section>
    </FormProvider>
  );
}
