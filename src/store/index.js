import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             visible: state.visible
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             visible: state.visible
//         };
//     }
//     if(action.type === 'increase-by-n'){
//         return {
//             counter: state.counter + action.amount,
//             visible: state.visible
//         }
//     }
//     if(action.type === "toggle-visibility"){
//         return {
//             counter: state.counter,
//             visible: !state.visible
//         }

//     }

//     return state;
// }