import React from 'react'
import { MeetupList } from '../meetups/MeetupList'
import { useContext } from 'react'
import { FavoriteContext } from '../store/FavoriteContextProvider'


export const Favorites = () => {

  let context=useContext(FavoriteContext)

  return (
  
    <>
    <MeetupList  meetups={context.favorites}/>
    </>
  )
}
