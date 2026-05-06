

import { useState } from 'react'

function LikeButton() {
  
  const [liked, setLiked] = useState(false)

  
  const toggleLike = () => setLiked(prev => !prev)

  return (
    <div className="like-container">
      {
      }
      <button onClick={toggleLike} className="like-button">
        <span className="heart-emoji">{liked ? '❤️' : '🤍'}</span>
        <span className="like-text">{liked ? 'Liked!' : 'Like'}</span>
      </button>

      <p className="like-status">
        Status: {liked ? '❤️ You liked this!' : '🤍 Not liked yet — click the heart!'}
      </p>
    </div>
  )
}

export default LikeButton
