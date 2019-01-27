import React, {Component} from 'react';

export default class Notify extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-notify"
                 style={{
                     display: this.props.isModalOpen ? "block" : "none"
                 }}
            >
                <div className="overlay" onClick={this.props.closeModal} />
                <div onClick={this.props.closeModal} />
                <div className="content">
                    <h2>Send Message To Driver</h2>
                    <form>
                        <textarea placeholder="Message Here"></textarea>
                        <div className="button-area">
                            <button type="button" className="cancel"
                                    onClick={this.props.closeModal}>
                                Cancel
                            </button>
                            <button type="submit"  className="submit"
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
