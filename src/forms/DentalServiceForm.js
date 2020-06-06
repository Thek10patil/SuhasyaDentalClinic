import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { ADMIN_API_URL } from './../config';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const FormItem = Form.Item;

class DentalServiceForm extends React.Component {

  constructor() {
    super();

    this.state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [
      ],
      serviceId: null
    }
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  }

  handleBeforeUpload =  ({ file, fileList }) => {
    console.log(file, fileList);
  }
  handleFormSubmit = (values, requestType, serviceId) => {

    // event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    switch (requestType) {
      case 'post':



        axios.post(`${ADMIN_API_URL}/dentalServices/`, {
          name: name,
          description: description,
          photos: []
        })
          .then(res => {
            this.props.updateData()
            console.log(res)
            console.log(this.state.fileList);
          

          for (var i = 0; i < this.state.fileList.length; i++) {
            let formData = new FormData();
            formData.append("dental_service", res.data.id);
            formData.append("photo", this.state.fileList[i].originFileObj);

            console.log(typeof(this.state.fileList[i].originFileObj));
            axios.post(`${ADMIN_API_URL}/dentalServicesPhotos/`, formData)
              .then(res =>
                console.log(res)
              )
              .catch(err => console.log(err))
          }


          }

          )
          .catch(err => console.log(err))

        
        return null

      case 'put':
        return axios.put(`${ADMIN_API_URL}/dentalServices/${serviceId}/`, {
          name: name,
          description: description
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))

    }
  }

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div>
        <Form onFinish={(values) => this.handleFormSubmit(values,
          this.props.requestType,
          this.props.serviceId
        )}>
          <FormItem label="Service Name">
            <Input id="name" placeholder="input placeholder" />
          </FormItem>
          <FormItem label="Description">
            <Input id="description" placeholder="input placeholder" />
          </FormItem>

          <Form.Item
            name="upload">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              beforeUpload={() => false}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

          </Form.Item>


          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
};


export default DentalServiceForm;