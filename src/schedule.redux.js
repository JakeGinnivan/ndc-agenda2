export const ADD = "schedule/ADD";

export const addToSchedule = talk => ({
    type: ADD,
    payload: { talk }
});

const initalAppState = { mySchedule: [] };

export default (state = initalAppState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                mySchedule: [
                    ...state.mySchedule,
                    action.payload.talk
                ]
            };

        default:
            return state;
    }
};
