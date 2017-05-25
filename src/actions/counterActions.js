export function incrementCounter() {
    return (dispatch) => {
        dispatch({type: 'INCREMENT'});
    };
}
