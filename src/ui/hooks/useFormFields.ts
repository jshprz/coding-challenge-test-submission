import { useState } from "react";

const useFormFields = (initialValues: any) => {
  const [formFields, setFormFields] = useState(initialValues);

  // Generic onChange handler
  const handleFieldChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  // Function to clear all form fields
  const clearFields = () => {
    setFormFields(initialValues);
  };

  return {
    formFields,
    handleFieldChange,
    clearFields,
  };
};

export default useFormFields;
