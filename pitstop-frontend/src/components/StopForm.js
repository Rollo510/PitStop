import React from 'react'

class StopForm extends React.Component {

    render() {
        return (
            <div id="stop-form">
                <form onSubmit={this.props.submit}>
                    Location Name: {" "}
                    <input
                        onChange={this.props.onChange}
                        name="name"
                        type="text"
                        value={this.props.name}
                    />
                    Review this Stop: {" "}
                    <input
                        onChange={this.props.onChange}
                        name="review"
                        type="textarea"
                        value={this.props.review}
                    />
                </form>
            </div>
        )
    }
}

export default StopForm
