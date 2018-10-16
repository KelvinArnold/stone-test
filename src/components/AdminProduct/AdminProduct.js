import React, { Component } from 'react';
import { Field } from 'redux-form';
import { currencyMask } from './../../helpers';
import { FormField } from './../FormField';
import { FormUploadField } from './../FormUploadField';
import MockCategory from './../../mock/mock-category.json';
import { withAlert } from 'react-alert';

class AdminProduct extends Component {
  renderField(field) {
    return <FormField field={field} />;
  }
  renderUploadField(field) {
    return <FormUploadField field={field} />
  }
  onSubmitForm(values) {
    console.log(values);
    // let picture = new FormData();
    // picture.append('name',values.picture[0])
    // let formData = new FormData();
    const product = {
      title: values.title,
      picture: {
        preview: 'https://picsum.photos/600/?random'
      },
      description: values.description,
      category: values.category,
      price: values.price
    }
    // formData.append('title', values.title);
    // formData.append('picture', values.picture[0]);
    // formData.append('description', values.description);
    // formData.append('category', values.category);
    // formData.append('price', values.price);
      
    this.props.createProduct(product, () => {
      this.props.reset();
      this.props.alert.success('Produto adicionado com sucesso!');
    });
  }
  renderProductForm() {
    const {handleSubmit, pristine, submitting} = this.props;
    return (
      <form className="form-row"
        onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
        <p className="col-12 mb-0">
          <strong className="text-link">Informações do produto</strong>
        </p>
        <Field
          className="col-12 col-sm-6"
          name="title"
          label="Nome do produto"
          component={this.renderField}
        />
        <Field
          className="col-12"
          type="file"
          name="picture"
          label="Selecione uma imagem"
          component={this.renderUploadField}
        />
        <Field
          className="col-12"
          name="description"
          type="textarea"
          label="Descrição do produto"
          component={this.renderField}
        />
        <Field
          className="col-12 col-sm-6"
          name="category"
          type="select"
          options={MockCategory}
          label="Nome da categoria"
          component={this.renderField}
        />
        <Field
          className="col-12 col-sm-6"
          name="price"
          label="Preço do produto"
          {...currencyMask}
          component={this.renderField}
        />
        <div className="col-12">
          <button className="btn btn-primary"
            disabled={pristine || submitting}>Salvar produto</button>
        </div>
      </form>
    )
  }
  render() {
    return (
      <div className="col-12">
        <h4 className="mb-3">Adicionar novos produtos</h4>
        {this.renderProductForm.bind(this)()}
      </div>
    )
  }
}

export default withAlert(AdminProduct);