import React, { useState } from 'react'

const LikeCounter = () => {

    const [likes, setLikes] = useState(0)

        return (
            <div>
                <button onClick={() => setLikes(likes + 1)}>Upvote this review</button>
                <div>Number of upvotes: </div>
                { likes }
            </div>
        )



}

export default LikeCounter