// passing values as action creators for readabilyti, and code debuging
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const div = () => ({type: 'DIV'});
export const rnd = () => {
    return {
        type: 'RND', 
        payload: Math.floor(Math.random() * 10), 
        payload1: Math.floor(Math.random() * 10)
    };
};
