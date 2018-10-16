import React, { Component } from 'react'
import Dropzone from 'react-dropzone';

class FormUploadField extends Component {
  render() {
    const {field} = this.props;
    const files = field.input.value;
    const { meta: {touched, error } } = field;
    const classInputError = `${touched && error ? 'text-danger': ''}`;
    let dropzoneRef;
    return (
      <div className="col-12 mb-3">
        <Dropzone
          className={`drop-zone w-100 ${classInputError}`}
          name={field.name}
          onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
          ref={(node) => { dropzoneRef = node; }}
          multiple={false}
          accept={'image/*'}>
          {
            ({isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
              if (isDragActive) {
                return 'Arquivo não autorizado';
              }
              if (isDragReject) {
                return 'Este arquivo no esta autorizado';
              }
              return `${field.label} Formatos aceitos: .png, .jpg`;
            }
          }
        </Dropzone>
        {files && Array.isArray(files) && (
          <div className="border mt-2 mb-2">
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              {files.map((file, i) =>
                <img key={i}
                className="img-fluid"
                src={file.preview} alt="preview"/>
              )}
            </div>
          </div>
        )}
        <span className={`btn btn-sm mt-2 btn-light text-primary ${classInputError}`}
          onClick={() => { dropzoneRef.open(); }}>
          Selecione uma imagem
        </span>
      </div>
    )
  }
}

export default FormUploadField;