// import React from "react";
// import { List, Avatar, Space } from "antd";
// import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
// import { MEDIA_URL } from "./../config";

// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );

// const DentalService = (props) => {
//   console.log(props.data);
//   return (
//     <List
//       itemLayout="vertical"
//       size="large"
//       pagination={{
//         onChange: (page) => {
//           console.log(page);
//         },
//         pageSize: 3,
//       }}
//       dataSource={props.data}
//       renderItem={(item) => (
//         <List.Item
//           key={item.name}
//           extra={
//             <img
//               height="250px"
//               width="250px"
//               src={MEDIA_URL + item.photos[0]}
//               alt="woman avatar"
//             />
//           }
//         >
//           <List.Item.Meta
//             avatar={<Avatar src={`/${item.photos[0]}`} />}
//             title={<a href={`/${item.id}`}>{item.name}</a>}
//           />
//           {item.description}
//         </List.Item>
//       )}
//     />
//   );
// };
// export default DentalService;
