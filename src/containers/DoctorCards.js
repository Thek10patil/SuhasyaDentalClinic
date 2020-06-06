// import React from 'react';
// import axios from 'axios';
// import './DoctorCards.css';
// import Doctor from '../components/Doctor';
// import { Loading } from './../utils/Loading';
// import { API_URL } from './../config';
// import DoctorForm from './../forms/DoctorForm';

// class DoctorCards extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             doctors: []
//         }
//         this.wrapper = React.createRef();
//         this.updateData = this.updateData.bind(this);
//     }

//     updateData() {
//         axios.get(`${API_URL}/aboutUs/`)
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     doctors: res.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error)
//                 // this.setState({
//                 //     error: error.errorMessage,
//                 //     loading: false,
//                 // });
//             });
//     }

//     componentDidMount() {
//         this.forceUpdate();
//         this.updateData();
//     }
//     componentWillReceiveProps(props) {
//         this.forceUpdate();
//     }

//     render() {
//         const { doctors, loading, error } = this.state;
//         console.log(doctors);
//         if (loading) {
//             return <div className="loading-container"> <Loading />  </div>
//         }

//         if (error) {
//             return <div className="error">{error}</div>
//         }

//         return (

//             <div className="DoctorCards">

//                 <div className="DoctorCardsForm">
//                     <h2 className="FormHeader">Add a Doctor</h2>
//                     <hr />
//                     <DoctorForm
//                         requestType="post"
//                         serviceId={null}
//                         btnText="Add Doctor"
//                         updateData={this.updateData} />
//                 </div>
//                 <hr />
//                 <Doctor
//                     doctors={doctors}
//                 />
//             </div>
//         )

//     }
// }

// export default DoctorCards;

// =============================================================================================

import React from "react";
import axios from "axios";
import "./DoctorCards.css";
import Doctor from "../components/Doctor";
import { Loading } from "./../utils/Loading";
import { API_URL } from "./../config";
import DoctorForm from "./../forms/DoctorForm";
import DoctorModal from "../modals/DoctorModal";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import { Card, CardDeck, Button } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";

class DoctorCards extends React.Component {
  constructor() {
    super();
    this.state = {
      doctors: [],
      error: null,
      loading: true,
      isOpen: false,
      selectedDoctor: null,
      requestType: "",
      addDoctorButton: true,
    };
  }

  updateDoctorData = () => {
    axios
      .get(`${API_URL}/aboutUs/`)
      .then((res) => {
        this.setState({
          doctors: res.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.updateDoctorData();
  }

  handleModal = (doctorId) => {
    this.setState({
      isOpen: true,
      selectedDoctor: this.state.doctors.filter(
        (doctor) => doctor.id == doctorId
      )[0],
      requestType: "put",
      addDoctorButton: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
      selectedDoctor: null,
    });
  };

  handleAddDoctor = () => {
    this.setState({
      isOpen: true,
      selectedDoctor: null,
      requestType: "post",
      addDoctorButton: true,
    });
  };

  render() {
    const { doctors, error, loading } = this.state;

    if (loading) {
      return (
        <div className="loading-container">
          {" "}
          <Loading />{" "}
        </div>
      );
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <div className="DoctorCards">
        {/* <div className="DoctorCardsForm">
          <h2 className="FormHeader">Add a Doctor</h2>
          <hr />
          <DoctorForm
            requestType="post"
            serviceId={null}
            btnText="Add Doctor"
            updateData={this.updateData}
          />
        </div>
        <hr /> */}

        <DoctorModal
          show={this.state.isOpen}
          selectedDoctor={this.state.selectedDoctor}
          requestType={this.state.requestType}
          addDoctorButton={this.state.addDoctorButton}
          handleCancel={this.handleCancel}
          updateDoctorData={this.updateDoctorData}
        ></DoctorModal>
        <CardDeck>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} handleModal={this.handleModal}></Doctor>
          ))}
        </CardDeck>
        {/* <button
          variant="info"
          className="AddDoctor"
          onClick={this.handleAddDoctor}
        >
          Add a Doctor
        </button> */}

        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          align="center"
          className="fontSizeLarge"
        >
          <AddCircleOutlineSharpIcon
            onClick={this.handleAddDoctor}
            fontSize="large"
          />
        </IconButton>
      </div>
    );
  }
}

export default DoctorCards;
