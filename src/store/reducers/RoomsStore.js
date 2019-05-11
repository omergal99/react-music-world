export default (state, action) => {
    var copy;
    if (!state) {
        copy = [{ txt: 'hello', from: 'Omer' }, { txt: 'hii', from: 'Amit' }]
    } else {
        copy = [...state];
    }
    console.log('reducer: ROOMS state: ', state, ", action.type: ", action)

    switch (action.type) {
        default:
            return copy;
    }
}