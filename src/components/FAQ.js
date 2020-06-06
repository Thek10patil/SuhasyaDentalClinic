import React from 'react';
import { List } from 'antd';


const FAQ = (props) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={item.question}
                        description={item.answer}
                    />
                </List.Item>
            )}
        />

    );

}

export default FAQ;
