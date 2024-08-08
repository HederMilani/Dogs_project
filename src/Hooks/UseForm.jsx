import React from "react";

const validations = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas.",
  },
};

const UseForm = (typeError) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  const validate = (value) => {
    if (typeError === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (
      validations[typeError] &&
      !validations[typeError].regex.test(value)
    ) {
      setError(validations[typeError].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default UseForm;
