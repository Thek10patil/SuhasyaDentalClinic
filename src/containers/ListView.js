// import React from 'react';
// import axios from 'axios';
// import DentalService from '../components/DentalService';
// import { API_URL } from './../config';


// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

// class ListView extends React.Component {


//     state = {
//         dentalServices : []
//     }


//     componentWillMount() {

//         axios.get(`${API_URL}/dentalServices/`)
//         .then(res => {
//             this.setState({
//                 dentalServices:res.data
//             });

//             console.log(res)
//         })
//     }

//     render() {

//         return(

//             <DentalService data = {this.state.dentalServices}/>
//         )
//         }
// }

// export default ListView; 