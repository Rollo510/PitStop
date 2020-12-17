export const loginUser = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/users/sign_in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { user: data }),
        })
            .then(response => response.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    // this.props.history.push("/home");
                }
            } 

        )
    }
}