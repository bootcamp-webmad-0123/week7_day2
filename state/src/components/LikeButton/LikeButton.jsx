import { useState } from 'react'
import dislikeImage from './../../assets/heart-off.svg'
import likeImage from './../../assets/heart-on.svg'

const LikeButton = () => {

    const [liked, setLiked] = useState(false)

    const switchLike = () => {
        setLiked(!liked)
    }

    let imagesource = liked ? likeImage : dislikeImage

    return (
        <div className="LikeButton">
            <img src={imagesource} alt="Botón" onClick={switchLike} />
        </div>
    )
}

export default LikeButton