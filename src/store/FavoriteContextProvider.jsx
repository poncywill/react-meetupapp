import React, { useState } from "react";
  export const FavoriteContext=React.createContext({
   favorites:[],
   totalFavorites:0,
   addFav:(meetup)=>{ } ,//empty function declared
   removeFav:(id)=>{ },
   itemIsFav:(id)=>{ }
})

export  function FavoriteContextProvider(props){
    const [userFavorite,setFavorite]= useState([])
    const addFavHandler=(meetup)=>{
        setFavorite([...userFavorite,meetup])
    }
    const removeFavHandler=(id)=>{
        setFavorite(userFavorite.filter(meetup=>meetup.id!=id))
    }
    const itemisFavHandler=(id)=>{
        return userFavorite.some(meetup=>meetup.id=id)
    }


    const context={favorites:userFavorite,totalFavorites:userFavorite.length,addFav:addFavHandler,
        removeFav:removeFavHandler,itemIsFav:itemisFavHandler}
        return (
            <FavoriteContext.Provider value={context}>
                {props.children}
            </FavoriteContext.Provider>
        )
    
}