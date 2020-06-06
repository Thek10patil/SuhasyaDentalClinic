import React from 'react';
import axios from 'axios';
import './Faq.css';
import FAQ from '../components/FAQ';
import FAQForm from '../forms/FAQForm';
import { API_URL } from './../config';

class FAQListView extends React.Component {

    constructor() {
        super();

        this.state = {
            FAQs: []
        }

        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        axios.get(`${API_URL}/faq/`)
            .then(res => {
                this.setState({
                    FAQs: res.data
                });
            })
    }

    componentDidMount() {
        this.updateData();
    }

    render() {

        return (

            <div className="Faq">



                <div className="FaqForm">
                    <h2 className="FormHeader">Add a FAQ</h2>
                    <hr />
                    <FAQForm
                        requestType="post"
                        questionId={null}
                        btnText="Add"
                        updateData={this.updateData}
                    />
                </div>
                <br />
                <FAQ data={this.state.FAQs} />

            </div>


        )
    }
}

export default FAQListView; 