const validateCheckin = values => {
  const errors = {};
  if (!values.cpf) {
    errors.cpf = 'Required';
  };
  if (values.cpf) {
    if (values.cpf.toString().length !== 11) {
      errors.cpf = 'O numero de cpf é invalido';
    }
  };
  if (!values.card_number) {
    errors.card_number = 'Required';
  };
  if (values.card_number) {
    if (values.card_number.toString().length !== 16) {
      errors.card_number = 'O numero do cartão de credito eé invalido';
    }
  };
  if (!values.card_name) {
    errors.card_name = 'Required';
  };
  if (!values.card_validation) {
    errors.card_validation = 'Required';
  };
  if (values.card_validation) {
    if (values.card_validation.toString().length !== 6) {
      errors.card_validation = 'Digite uma data de validade correta';
    }
  };
  if (!values.card_cvv) {
    errors.card_cvv = 'Required';
  };
  if (values.card_cvv) {
    if (values.card_cvv.toString().length !== 3) {
      errors.card_cvv = 'O codigo CVV é de três digitos';
    }
  };
  return errors;
}

export default validateCheckin;