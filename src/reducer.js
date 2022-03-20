const initialState = {
    Search_key: "top",
    moviedetailes: {}
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'SEARCH_KEY':
            newState.Search_key = action.payload
            break;
        case 'FAVORITE':
            // console.log(action.payload.data.imdbID)
            newState.moviedetailes[action.payload.data.imdbID] = action.payload.data
            newState.moviedetailes = { ...newState.moviedetailes }
            console.log(newState.moviedetailes)
            break;
        case "REMOVE_FAVORITE":
            delete newState.moviedetailes[action.payload];
            newState.moviedetailes = { ...newState.moviedetailes };
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;