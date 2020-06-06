// import React from 'react';
// import { Card, CardDeck, Button } from 'react-bootstrap';
// import { Modal } from 'antd';
// import DoctorForm from './../forms/DoctorForm'
// import DoctorModal from './../modals/DoctorModal';
// // import {
// //     Card, CardImg, CardText, CardBody,
// //     CardTitle, CardSubtitle, Button
// //   } from 'reactstrap';

// class Doctor extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             doctors: [],
//             isOpen: false,
//             selectedDoctor:null
//         }
//     }

//     toggleModal = (d) => {
//         this.setState({
//             isOpen: true,
//             selectedDoctor:d
//         });
//     }

//     // handleOk = e => {
//     //     console.log(e);
//     //     this.setState({
//     //         isOpen: false,
//     //         selectedDoctor:null
//     //     });
//     // };

//     // handleCancel = e => {
//     //     console.log(e);
//     //     this.setState({
//     //         isOpen: false,
//     //         selectedDoctor:null
//     //     });

//     // };
//     _createCardsUI = () => {
//         let cards = [], data = this.state.doctors;
//         for (var i = 0; i < data.length; i++) {
//             let d = data[i];
//             cards.push(
//                 <Card key={data[i].name}>
//                     <Card.Img variant="top" height="400px" width="100%" src={data[i].photo} />
//                     <Card.Body>
//                         <Card.Title>{data[i].name}</Card.Title>
//                         <Card.Text>{data[i].degree}</Card.Text>
//                     </Card.Body>
//                     <Button variant="outline-secondary" onClick={() => this.toggleModal(d)}>Edit</Button>
//                 </Card>
//             );
//         }
//         return cards;
//     }

//     render() {
//         this.state.doctors = this.props.doctors;
//         return (

//             <div >

//                 <DoctorModal show={this.state.isOpen} selectedDoctor={this.state.selectedDoctor}></DoctorModal>
//                 {/* <Modal
//                     title="Update"
//                     visible={this.state.isOpen}
//                     onOk={this.handleOk}
//                     onCancel={this.handleCancel}
//                 >
//                     <DoctorForm data = {this.state.selectedDoctor} ></DoctorForm>
//                 </Modal> */}

//                 <CardDeck>
//                     {this._createCardsUI()}
//                 </ CardDeck>
//             </div>
//         )
//     }
// };

// export default Doctor;

// ==================================================================================================================================================================

// import React from "react";
// import { Card, CardDeck, Button } from "react-bootstrap";
// import { Modal } from "antd";
// import DoctorForm from "./../forms/DoctorForm";
// import DoctorModal from "./../modals/DoctorModal";

// const Doctor = (props) => {
//   //   toggleModal = (d) => {
//   //     this.setState({
//   //       isOpen: true,
//   //       selectedDoctor: d,
//   //     });
//   //   };

//   const { doctor, handleModal } = props;
//   return (
//     <div>
//       <CardDeck>
//         <Card key={doctor.id}>
//           <Card.Img
//             variant="top"
//             height="400px"
//             width="100%"
//             src={doctor.photo}
//           />
//           <Card.Body>
//             <Card.Title>{doctor.name}</Card.Title>
//             <Card.Text>{doctor.degree}</Card.Text>
//           </Card.Body>
//           <Button
//             variant="outline-secondary"
//             onClick={() => handleModal(doctor.id)}
//           >
//             Edit
//           </Button>
//         </Card>
//       </CardDeck>
//     </div>
//   );
// };

// export default Doctor;

import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { Modal } from "antd";
import DoctorForm from "./../forms/DoctorForm";
import DoctorModal from "./../modals/DoctorModal";

const Doctor = (props) => {
  //   toggleModal = (d) => {
  //     this.setState({
  //       isOpen: true,
  //       selectedDoctor: d,
  //     });
  //   };

  const { doctor, handleModal } = props;
  return (
    <div className="card testimonial-card">
      <div className="card-up indigo lighten-1"></div>

      <div className="avatar mx-auto white">
        <img
          height="250px"
          width="250px"
          src={doctor.photo}
          className="rounded-circle"
          alt="woman avatar"
        />
      </div>

      <div className="card-body">
        <h4 className="card-title">{doctor.name}</h4>
        <hr />

        <p align="center">
          <i className="fas fa-quote-left"></i> {doctor.degree}
        </p>
      </div>
      <Button className="btn btn-dark" onClick={() => handleModal(doctor.id)}>
        Edit
      </Button>
    </div>
  );
};

export default Doctor;
