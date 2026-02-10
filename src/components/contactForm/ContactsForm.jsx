import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./contactsForm.module.css";

const ContactForm = ({ onAdd }) => {
  const initialValue = {
    name: '',
    number: '',
  };

  const ContactSchema = Yup.object({
  name: Yup.string()
    .min(3, "At least 2 characters")
    .max(50, "Maximum 15 characters")
    .required("Required!"),
  number: Yup.string()
    .min(3, "At least 2 characters")
    .max(50, "Maximum 25 characters")
    .required("Required!"),
  });
  
<ErrorMessage
  name="number"
  component="span"
  className={styles.error}
/>

  const handleSubmit = (value, actions) => {
    onAdd(value);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <Field className={styles.input} type="text" name="name" id="name" />
        <ErrorMessage className={styles.error} name="name" component="span" />

        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <Field className={styles.input} type="tel" name="number" id="number" />
        <ErrorMessage className={styles.error} name="number" component="span" />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
