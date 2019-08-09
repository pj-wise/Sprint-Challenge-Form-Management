import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RegForm = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {});

  return (
    <div className="form">
      <h1>Registration</h1>
    </div>
  );
};

export default RegForm;
