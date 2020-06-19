// import React from 'react';
// import axios from 'axios';
// import DentalService from '../components/DentalService';
// import './DentalService.css'
// import DentalServiceForm from '../forms/DentalServiceForm';
// import { API_URL } from './../config';

// class DentalServicesListView extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             DentalServices: []
//         }

//         this.updateData = this.updateData.bind(this);
//     }

//     updateData() {
//         axios.get(`${API_URL}/dentalServices/`)
//             .then(res => {
//                 this.setState({
//                     DentalServices: res.data
//                 });
//             })
//     }

//     componentWillMount() {
//         this.updateData();
//     }

//     render() {

//         return (

//             <div className="DentalService">

//                 <div className="DentalServiceForm">
//                 <h2 className="FormHeader">Add a Dental Service</h2>
//                 <hr />
//                     <DentalServiceForm
//                         requestType="post"
//                         serviceId={null}
//                         btnText="Add"
//                         updateData={this.updateData}

//                     />
//                 </div>
//                 <br />
//                 <br></br>

//                 <DentalService data={this.state.DentalServices} />

//             </div>

//         )
//     }
// }

// export default DentalServicesListView;
