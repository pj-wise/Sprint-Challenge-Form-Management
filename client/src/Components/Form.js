import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RegForm = ({ errors, touched }) => {
  return (
    <div className="form">
      <h1>Registration</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">Please enter your username</p>
        )}
        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">Please enter your password</p>
        )}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikRegForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Please enter your password")
  })
})(RegForm);

export default FormikRegForm;
