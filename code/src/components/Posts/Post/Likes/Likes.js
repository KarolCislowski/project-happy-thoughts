import React, { useState } from 'react'

const Likes = ({ hearts, id }) => {
  const [likes, setLikes] = useState(hearts)

  const likeClickHandler = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, { method: 'POST' })
    setLikes(likes + 1)
  }

  return (
    <section>
      <button type="button" className={(likes > 0 ? 'liked' : '')} onClick={likeClickHandler}>
        <i className="fa fa-heart" aria-hidden="true" />
      </button>
      <p>x{likes}</p>
    </section>
  )
}

export default Likes