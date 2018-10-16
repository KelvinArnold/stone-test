import React, { Component } from 'react'

class FormField extends Component {
  renderInputType(field) {
    const { meta: {touched, invalid} } = field;
    const classInputError = `${touched && invalid ? 'is-invalid': ''}`;
    switch (field.type) {
    case "textarea":
      return (
        <textarea
          className={`form-control ${classInputError}`}
          rows="3"
          {...field.input}
          placeholder={field.placeholder}>
        </textarea>
      )
    case "select":
      return (
        <select
          className={`form-control ${classInputError}`}
          {...field.input}>
          <option>Selecione uma categoria</option>
          { field.options.map((opt, index) => {
            return <option value={opt.value} key={index}>{opt.label}</option>
          }) }
        </select>
      )
    case "file":
      return (
        <div className="custom-file">
          <input
            className={`custom-file-input ${classInputError}`}
            type="file"
            accept="image/png, image/jpeg"/>
          <label className="custom-file-label">{field.label}</label>
        </div>
      )
    default:
      return (
        <input
          className={`form-control ${classInputError}`}
          {...field.input}
          placeholder={field.placeholder}></input>
      )
    }
  }
  render() {
    const {field} = this.props;
    const { meta: {touched, invalid, error} } = field;
    return (
      <div className={`form-group ${field.className}`}>
        <label>{field.label}</label>
        {this.renderInputType.bind(this)(field)}
        <div className="invalid-feedback">
          {touched && invalid ? `${error}` : ''}
        </div>
        <small className="form-text text-link pl-2 font-italic">{field.help}</small>
      </div>
    )
  }
}

export default FormField;