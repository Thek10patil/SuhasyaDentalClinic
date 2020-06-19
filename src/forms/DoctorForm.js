// // import React from "react";
// // import { Form, Input, Button } from "antd";
// // import axios from "axios";
// // import { ADMIN_API_URL } from "./../config";
// // import { Upload, Modal } from "antd";
// // import { PlusOutlined } from "@ant-design/icons";

// // function getBase64(file) {
// //   return new Promise((resolve, reject) => {
// //     const reader = new FileReader();
// //     reader.readAsDataURL(file);
// //     reader.onload = () => resolve(reader.result);
// //     reader.onerror = (error) => reject(error);
// //   });
// // }

// // const FormItem = Form.Item;

// // class DoctorForm extends React.Component {
// //   constructor(props) {
// //     super();
// //     console.log(props.data);
// //     this.state = {
// //       doctorName: "",
// //       degree: "",
// //       previewVisible: false,
// //       previewImage: "",
// //       previewTitle: "",
// //       fileList: [],
// //       serviceId: null,
// //     };
// //     if (props.data) {
// //       this.state.doctorName = props.data.name;
// //       this.state.degree = props.data.degree;
// //       this.state.fileList.push({
// //         uid: "-1",
// //         name: props.data.photo.split("/").splice(-1, 1),
// //         status: "done",
// //         url: props.data.photo,
// //       });
// //     }
// //   }

// //   componentWillReceiveProps(nextProps) {
// //     console.log(nextProps);
// //     if (nextProps) {
// //       console.log(nextProps);
// //       this.state.doctorName = nextProps.name;
// //       this.state.degree = nextProps.degree;
// //     }
// //     this.setState(this.state);
// //   }

// //   handleCancel = () => this.setState({ previewVisible: false });

// //   handlePreview = async (file) => {
// //     if (!file.url && !file.preview) {
// //       file.preview = await getBase64(file.originFileObj);
// //     }
// //     this.setState({
// //       previewImage: file.url || file.preview,
// //       previewVisible: true,
// //       previewTitle:
// //         file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
// //     });
// //   };

// //   onDoctorNameChange(doctorName) {
// //     this.setState({
// //       doctorName: doctorName,
// //     });
// //   }

// //   onDegreeNameChange(degree) {
// //     this.setState({
// //       degree: degree,
// //     });
// //   }

// //   handleChange = ({ fileList }) => {
// //     this.setState({ fileList: [...fileList] });
// //   };

// //   handleBeforeUpload = ({ file, fileList }) => {
// //     console.log(file, fileList);
// //   };

// //   handleFormSubmit = (values, requestType, serviceId) => {
// //     // event.preventDefault();
// //     const name = document.getElementById("name").value;
// //     const degree = document.getElementById("degree").value;
// //     let formData = new FormData();
// //     switch (requestType) {
// //       case "post":
// //         formData.append("name", name);
// //         formData.append("degree", degree);
// //         formData.append("photo", this.state.fileList[0].originFileObj);

// //         return axios
// //           .post(`${ADMIN_API_URL}/aboutUs/`, formData)
// //           .then((res) => {
// //             this.props.updateData();
// //             console.log(res);
// //             console.log(this.state.fileList);
// //           })
// //           .catch((err) => console.log(err));

// //       case "put":
// //         formData.append("name", name);
// //         formData.append("degree", degree);
// //         formData.append("photo", this.state.fileList[0].originFileObj);

// //         return axios
// //           .put(`${ADMIN_API_URL}/aboutUs/${serviceId}/`, formData)
// //           .then((res) => console.log(res))
// //           .catch((err) => console.log(err));
// //     }
// //   };

// //   render() {
// //     const { previewVisible, previewImage, fileList, previewTitle } = this.state;
// //     const uploadButton = (
// //       <div>
// //         <PlusOutlined />
// //         <div className="ant-upload-text">Upload</div>
// //       </div>
// //     );

// //     return (
// //       <div>
// //         <Form
// //           onFinish={(values) =>
// //             this.handleFormSubmit(
// //               values,
// //               this.props.requestType,
// //               this.props.serviceId
// //             )
// //           }
// //         >
// //           <FormItem label="Doctor Name">
// //             <Input
// //               type="text"
// //               id="name"
// //               value={this.state.doctorName}
// //               placeholder="input placeholder"
// //               onChange={(e) => this.onDoctorNameChange(e.target.value)}
// //             />
// //           </FormItem>
// //           <FormItem label="Degree">
// //             <Input
// //               type="text"
// //               id="degree"
// //               value={this.state.degree}
// //               placeholder="input placeholder"
// //               onChange={(e) => this.onDegreeNameChange(e.target.value)}
// //             />
// //           </FormItem>

// //           <Form.Item>
// //             <Upload
// //               listType="picture-card"
// //               fileList={fileList}
// //               onPreview={this.handlePreview}
// //               onChange={this.handleChange}
// //               beforeUpload={() => false}
// //             >
// //               {fileList.length >= 1 ? null : uploadButton}
// //             </Upload>
// //             <Modal
// //               visible={previewVisible}
// //               title={previewTitle}
// //               footer={null}
// //               onCancel={this.handleCancel}
// //             >
// //               <img alt="example" style={{ width: "100%" }} src={previewImage} />
// //             </Modal>
// //           </Form.Item>

// //           <FormItem>
// //             <Button type="primary" htmlType="submit">
// //               {this.props.btnText}
// //             </Button>
// //           </FormItem>
// //         </Form>
// //       </div>
// //     );
// //   }
// // }

// // export default DoctorForm;

// import React from "react";
// import { Form, Input, Button } from "antd";
// import { Upload, Modal } from "antd";
// import { PlusOutlined } from "@ant-design/icons";

// const FormItem = Form.Item;

// const DoctorForm = (props) => {
//   const {
//     handleFormSubmit,
//     requestType,
//     doctor,
//     onDoctorNameChange,
//     onDegreeDegreeChange,
//     fileList,
//     handlePreview,
//     handleChange,
//     previewVisible,
//     previewTitle,
//     handleCancel,
//     previewImage,
//     btnText,
//     newDoctorName,
//     newDoctorDegree,
//   } = props;
//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div className="ant-upload-text">Upload</div>
//     </div>
//   );
//   return (
//     <div>
//       <Form
//         onFinish={(values) => handleFormSubmit(values, requestType, doctor.id)}
//       >
//         <FormItem label="Doctor Name">
//           <Input
//             type="text"
//             id="name"
//             value={
//               doctor ? doctor.name : newDoctorName != "" ? newDoctorName : ""
//             }
//             placeholder="input placeholder"
//             onChange={(e) => onDoctorNameChange(e.target.value)}
//           />
//         </FormItem>
//         <FormItem label="Degree">
//           <Input
//             type="text"
//             id="degree"
//             value={
//               doctor
//                 ? doctor.degree
//                 : newDoctorDegree != ""
//                 ? newDoctorDegree
//                 : ""
//             }
//             placeholder="input placeholder"
//             onChange={(e) => onDegreeDegreeChange(e.target.value)}
//           />
//         </FormItem>

//         <Form.Item>
//           <Upload
//             listType="picture-card"
//             fileList={fileList}
//             onPreview={handlePreview}
//             onChange={handleChange}
//             beforeUpload={() => false}
//           >
//             {fileList.length >= 1 ? null : uploadButton}
//           </Upload>
//           <Modal
//             visible={previewVisible}
//             title={previewTitle}
//             footer={null}
//             onCancel={handleCancel}
//           >
//             <img alt="example" style={{ width: "100%" }} src={previewImage} />
//           </Modal>
//         </Form.Item>

//         <FormItem>
//           <Button type="primary" htmlType="submit">
//             {btnText}
//           </Button>
//         </FormItem>
//       </Form>
//     </div>
//   );
// };

// export default DoctorForm;
