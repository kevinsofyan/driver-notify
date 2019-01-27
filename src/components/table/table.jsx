import React, { Component } from 'react';
import Notify from "../notify/notify";

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            isInnerModalOpen: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }

    openModal() {
        this.setState({
            isModalOpen: true
        });
    }

    render() {
        return (
            <section className="app-table">
                <h1>Notify My Go-Jek Driver</h1>
                <div className="table-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Suspended</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>sd</td>
                            <td>
                                <div className="notify-btn">
                                    <button onClick={this.openModal}>
                                        Notify
                                    </button>
                                </div>
                                <Notify isModalOpen={this.state.isModalOpen}
                                        closeModal={this.closeModal}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}