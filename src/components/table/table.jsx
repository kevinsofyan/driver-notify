import React, { Component } from 'react';
import TableDriverList from "./TableDriverList";
import DriversData from "../../drivers"

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: DriversData
        }
    }

    render() {
        return (
            <section className="app-table">
                <h1>Notify My Go-Jek Driver</h1>
                <div className="table-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                        <tr>
                            <th className="center">ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th className="center">Suspended</th>
                            <th className="center">Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <TableDriverList data={this.state.drivers}/>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}