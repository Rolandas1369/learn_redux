// passing values as action creators for readabilyti, and code debuging
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (payload, payload1) => ({type: 'RND', payload, payload1});