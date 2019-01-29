import React, {Component} from 'react';

export default class Notify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.doOnChange = this.doOnChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doOnChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    doSubmit(event) {
        if (this.state.message !== "") {
            alert(this.state.message);
            this.state.message = "";
            this.props.closeModal();
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="app-notify"
                 style={{
                     display: this.props.isModalOpen ? "block" : "none"
                 }}>
                <div className="overlay" onClick={this.props.closeModal} />
                <div onClick={this.props.closeModal} />
                <div className="content">
                    <h2>Send Message To Driver</h2>
                    <form onSubmit={this.doSubmit}>
                        <textarea placeholder="Message Here"
                                  onChange={this.doOnChange}
                                  value={this.state.message}></textarea>
                        <div className="button-area">
                            <button type="button"
                                    className="btn-normal cancel-btn"
                                    onClick={this.props.closeModal}>
                                Cancel
                            </button>
                            <button type="submit"
                                    className="btn-green submit-btn"
                                    disabled={this.state.message === ""}
                                    value="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
