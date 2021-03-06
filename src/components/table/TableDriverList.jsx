import React, { Component } from 'react';
import Notify from "../notify/Notify";

export default class TableDriverList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
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
            <tbody>
            {this.props.data.drivers.map((list) =>
                <tr key={list.id}>
                    <td className="center">{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.phone}</td>
                    <td>{list.email}</td>
                    <td className="center">{list.suspended ? "YES" : "NO"}</td>
                    <td>
                        <button className="btn-green notify-btn" onClick={this.openModal}
                                disabled={list.suspended}>
                            {list.suspended ? "SUSPENDED" : "NOTIFY"}
                        </button>
                        <Notify isModalOpen={this.state.isModalOpen}
                                closeModal={this.closeModal}/></td>
                </tr>
            )}
            </tbody>
        );
    }
}
