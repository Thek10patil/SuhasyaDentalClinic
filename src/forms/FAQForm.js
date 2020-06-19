// import React from 'react';
// import { Form, Input, Button } from 'antd';
// import axios from 'axios';
// import { ADMIN_API_URL } from './../config';

// const FormItem = Form.Item;

// class FAQForm extends React.Component {

//     handleFormSubmit = (values, requestType, questionId) => {

//         // event.preventDefault();
//         const question = document.getElementById('question').value;
//         const answer = document.getElementById('answer').value
//         console.log(answer)

//         switch (requestType) {
//             case 'post':
//                 return axios.post(`${ADMIN_API_URL}/faq/`,{
//                     question: question,
//                     answer: answer
//                 })
//                 .then(res =>
//                     this.props.updateData()
//                 )
//                 .catch(err => console.log(err))

//             case 'put':
//                 return axios.put(`${ADMIN_API_URL}/faq/${questionId}/`,{
//                     question: question,
//                     answer: answer
//                 })
//                 .then(res => console.log(res))
//                 .catch(err => console.log(err))

//         }
//     }

//     render() {
//         return (
//             <div>
//             <Form onFinish={(values) => this.handleFormSubmit(values,
//                     this.props.requestType,
//                     this.props.questionId
//                 )}>
//               <FormItem label="Question">
//                 <Input id="question" placeholder="input placeholder" />
//               </FormItem>
//               <FormItem label="Answer">
//                 <Input id="answer" placeholder="input placeholder" />
//               </FormItem>
//               <FormItem>
//             <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
//               </FormItem>
//             </Form>
//           </div>
//         );
//             }
// };

// export default FAQForm;
