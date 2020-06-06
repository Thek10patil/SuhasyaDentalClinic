// import React from 'react';
// import axios from 'axios';
// import { Card } from 'antd';

// class DetailView extends React.Component {


//     state = {
//         doctor : {}
//     }


//     componentDidMount() {
//         const articleId = this.props.match.params.articleID;
//         axios.get(`http://127.0.0.1:8000/api/${articleId}`)
//         .then(res => {
//             this.setState({
//                 doctor:res.data
//             });
//             console.log(res)
//         })
//         .catch((error) => {
//             console.log(error)
//         });
        
//     }

//     render() {

//         return(

//             <Card title ={this.state.doctor.name}> 
            
//                 <p> {this.state.doctor.degree}</p>
//             </Card>
//         )
//         }
// }

// export default DetailView; 