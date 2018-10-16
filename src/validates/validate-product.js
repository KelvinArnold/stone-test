const validateProduct = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  };
  if (!values.description) {
    errors.description = 'Required';
  };
  if (!values.picture) {
    errors.picture = 'Required';
  };
  if (!values.category) {
    errors.category = 'Required';
  };
  if (!values.price) {
    errors.price = 'Required';
  };
  return errors;
}

export default validateProduct;