import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import AddEditInstModal from './AddEditInstModal'

class Institutions extends Component {

    constructor(props){
        super(props);
    }

    state = {
        show: false
    }

    onCloseModal = e => {
        console.log(e);
        this.setState({show: false})
    }

    openAddDialog = e => {
        this.setState({show: true})
    }

    render() {
        return <>
            <AddEditInstModal show={this.state.show} onClose={this.onCloseModal}></AddEditInstModal>
            <div className="mb-2">
                <Button variant="primary" onClick={this.openAddDialog}>Add institution</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    }
}

export default Institutions;