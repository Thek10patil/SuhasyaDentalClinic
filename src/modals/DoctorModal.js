import React from "react";
import { Button, Modal } from "react-bootstrap";
import DoctorForm from "./../forms/DoctorForm";
import axios from "axios";
import { ADMIN_API_URL } from "./../config";
import history from "./../history";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class DoctorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [],
      serviceId: null,
      newDoctorName: "",
      newDoctorDegree: "",
    };
    this.doctorFormRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps.show,
    });
  }

  handleUpdate = () => {
    this.props.handleCancel();
    let formData = new FormData();
    formData.append("name", this.doctorFormRef.current.state.doctorName);
    formData.append("degree", this.doctorFormRef.current.state.degree);
    formData.append(
      "photo",
      this.doctorFormRef.current.state.fileList[0].originFileObj
    );

    axios
      .put(
        `${ADMIN_API_URL}/aboutUs/${this.props.selectedDoctor.id}/`,
        formData
      )
      .then((res) => console.log(res, "updated"))
      .catch((err) => console.log(err));
  };

  handleDelete = () => {
    this.props.handleCancel();
    axios.delete(`${ADMIN_API_URL}/aboutUs/${this.props.selectedDoctor.id}`);

    this.props.updateDoctorData();
  };

  handleCancelModal = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  onDoctorNameChange = (doctorName) => {
    // this.setState({
    //   selectedDoctor: doctorName,
    // });
    this.setState({ newDoctorName: doctorName });
  };

  onDoctorDegreeChange = (degree) => {
    // this.setState({
    //   degree: degree,
    // });
    this.setState({ newDoctorDegree: degree });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList: fileList });
  };

  handleBeforeUpload = ({ file, fileList }) => {
    console.log(file, fileList);
  };

  handleFormSubmit = () => {
    let formData = new FormData();
    formData.append("name", this.state.newDoctorName);
    formData.append("degree", this.state.newDoctorDegree);
    formData.append("photo", this.state.fileList[0].originFileObj);

    return axios
      .post(`${ADMIN_API_URL}/aboutUs/`, formData)
      .then((res) => {
        this.props.handleCancel();
        this.props.updateDoctorData();
        this.setState({
          newDoctorName: "",
          newDoctorDegree: "",
          fileList: [],
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      show,
      selectedDoctor,
      requestType,
      addDoctorButton,
      handleCancel,
      updateDoctorData,
    } = this.props;
    return (
      <div>
        <Modal show={show} onHide={handleCancel} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span className="ModalTitle">
                {addDoctorButton ? "Add a Doctor" : "Update Doctor"}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DoctorForm
              handleFormSubmit={(values) =>
                this.handleFormSubmit(values, requestType, selectedDoctor.id)
              }
              requestType={requestType}
              doctor={selectedDoctor}
              onDoctorNameChange={this.onDoctorNameChange}
              onDegreeDegreeChange={this.onDoctorDegreeChange}
              fileList={this.state.fileList}
              handlePreview={this.handlePreview}
              handleChange={this.handleChange}
              previewVisible={this.state.previewVisible}
              previewTitle={this.state.previewTitle}
              handleCancel={this.state.handleCancel}
              previewImage={this.state.previewImage}
              btnText={this.state.btnText}
              newDoctorName={this.state.newDoctorName}
              newDoctorDegree={this.state.newDoctorDegree}
            ></DoctorForm>
          </Modal.Body>

          {addDoctorButton ? (
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleFormSubmit}>
                Add
              </Button>
            </Modal.Footer>
          ) : (
            <Modal.Footer>
              <Button variant="info" onClick={this.handleUpdate}>
                Update
              </Button>
              <Button variant="danger" onClick={this.handleDelete}>
                Delete
              </Button>{" "}
            </Modal.Footer>
          )}
        </Modal>
      </div>
    );
  }
}

export default DoctorModal;
