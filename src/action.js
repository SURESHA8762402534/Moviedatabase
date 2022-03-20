export const searchAction = (payload) => {
    return {
        type : "SEARCH_KEY",
        payload,
    }
}
export const Favoriteaction = (payload) => {
    return {
        type:"FAVORITE",
        payload
    }
}

export const removeFavoriteaction = (payload)=>{
    return{
        type:"REMOVE_FAVORITE",
        payload
    }
}