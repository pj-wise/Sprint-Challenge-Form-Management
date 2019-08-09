import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const RegForm = ({ values, errors, touched, status, setData }) => {
  useEffect(() => {
    if (status) {
      axios
        .get("http://localhost:5000/api/restricted/data")
        .then(res => {
          console.log("GET Success", res);
          setData(res.data);
        })
        .catch(err => console.log("GET Fail", err));
    }
  }, [status]);

  return (
    <Form>
      <h1>Registration</h1>
      <Field type="text" name="username" placeholder="Your name" />
      {touched.username && errors.username && <p>{errors.username}</p>}

      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikRegForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: yup.object().shape({
    username: yup.string().required("*Name is required"),
    password: yup
      .string()
      .min(6, "*Password must be 6 characters or longer")
      .required("*Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log("POST Success", res);
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log("POST Fail", err);
        setSubmitting(false);
      });
  }
})(RegForm);

export default FormikRegForm;
