import React from 'react'

class StopForm extends React.Component {
    state = {
        name: "",
        review: ""
    }

    render() {
        return (
            <div id="stop-form">
                <form onSubmit={this.props.submit}>
                    name: {" "}
                    <input
                        onChange={(e) => this.setState({ name: e.target.value })}
                        type="text"
                        value={this.state.name}
                    />
                    review: {" "}
                    <input
                        onChange={(e) => this.setState({ review: e.target.value })}
                        type="text"
                        value={this.state.review}
                    />
                </form>
            </div>
        )
    }
}

export default StopForm
