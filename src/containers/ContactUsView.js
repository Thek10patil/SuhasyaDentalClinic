import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './ContactUs.css';
import { API_URL } from '../config';
import axios from 'axios';


class ContactUsView extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/contactUs/`)
            .then(res => {
                this.setState({
                    contacts: res.data
                });
            })
            console.log(this.state)
    }


    _createCardsUI = () => {
        let cards = [], data = this.state.contacts;
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            cards.push(
                <Card border="primary" key={data[i].hospital_name}>
                        <Card.Body>
                            <Card.Title>Hostpital Name: {data[i].hospital_name}</Card.Title>
                            <Card.Text>Contact Number: {data[i].mobile_number}</Card.Text>
                            <Card.Text>Lattitude: {data[i].location[0].latutude}</Card.Text>
                            <Card.Text>Longitude: {data[i].location[0].longitude}</Card.Text>
                        </Card.Body>
                    </Card>
            );

        }
        return cards;
    }

    render() {
        return (
            <div className="ContactUs">
                <CardDeck>
                {this._createCardsUI()}
                </ CardDeck>

            </div>
        )
    }
};


export default ContactUsView;

