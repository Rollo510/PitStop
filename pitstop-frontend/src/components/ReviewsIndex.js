import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { getUsers } from '../redux/actions/tripActions'

class ReviewsIndex extends React.Component {
    
    componentDidMount() {
        this.props.getUsers()
    }
    

    render () {


        const stopReviews = this.props.stops.map(stop => {
            let foundName = this.props.users.find(user => user.id === stop.user_id)
            return (
                <CardDeck>
                    <Card
                        bg={'light'}
                        key={stop.id}
                        text={'dark'}
                        style={{ width: '18rem', margin: '20px' }}
                        className="mb-2"
                    >
                        <Card.Header>{stop.name}</Card.Header>
                        <Card.Body>
                            <Card.Title> {foundName.username} says: </Card.Title>
                            <Card.Text>
                                {stop.review}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            )
        })

        return (
            <div>
                {stopReviews}
            </div>
        )
    }

}



    const mapStateToProps = (state) => {
        return {
            stops: state.stops,
            users: state.users
        }
    }


export default connect (mapStateToProps, { getUsers })(ReviewsIndex)
