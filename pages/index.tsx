import { Formik, Form, Field } from 'formik';
import React from 'react';

const Index = () => {
  return (
    <Formik
      initialValues={{
        director: '',
        movieName: '',
        yearReleased: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label>
          Movie Name
          <Field name="movieName" type="text"></Field>
        </label>
        <label>
          Director
          <Field name="director" type="text"></Field>
        </label>
        <label>
          Year Released
          <Field name="yearReleased" type="text"></Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Index;
