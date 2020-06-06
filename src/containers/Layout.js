import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content } = Layout;


const CustomLayout = (props) => {

    return (


        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/aboutUs">About Us</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/contactUs">Contact Us</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/dentalServices">Dental Services</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/faq">FAQ</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/bookAppointment">Book Appointment</Link></Menu.Item>
                    </Menu>
                </Header>


            </Layout>
            <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">  Home </Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">  List </Link></Breadcrumb.Item>
            
        </Breadcrumb> */}
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
        </div>

    );

}

export default CustomLayout;