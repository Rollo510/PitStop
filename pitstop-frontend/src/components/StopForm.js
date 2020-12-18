import React from 'react'

class StopForm extends React.Component {

    render() {
        return (
            <div className="stop-form">
                <form onSubmit={this.props.submit}>
                    Location Name: {" "}
                    <input
                        name="name"
                        type="text"
                        value={this.props.name}
                    />
                    Review this Stop: {" "}
                    <input
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
