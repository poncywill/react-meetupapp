import React, { useContext } from 'react'

import { Card } from '../ui/Card'
import './meetupitem.css'
import { FavoriteContext } from '../store/FavoriteContextProvider'



export const MeetupItem = ({ meetup, id }) => {
  let context = useContext(FavoriteContext)
  let toggleFavHandler = () => {   //toggle the button
    if (context.itemIsFav(id)) {
      context.removeFav(id)
    }
    else {
      context.addFav(meetup)
    }

  }


  return (<>

    <Card>
      <h1>{meetup.title}</h1>

      <img src={meetup.image}></img>
      <h3>{meetup.address}</h3>
      <p>{meetup.description}</p>
      {/* <button onClick={() => context.addFav(meetup)}> */}

      <button onClick={toggleFavHandler}>
        {context.itemIsFav(meetup.id) ? "Remove" : "Favorite"}
      </button>
    </Card>




  </>
  )
}
