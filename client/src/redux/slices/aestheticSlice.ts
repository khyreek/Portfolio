import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface State {
    transitionController: IntersectionObserver | null;
}

// Define the initial state using that type
const initialState: State = {
    transitionController: null,
};

export const slice = createSlice({
    name: "aesthetic",
    initialState,
    reducers: {
        // setters
        setTransitionController: (
            state,
            action: PayloadAction<IntersectionObserver>
        ) => {
            return { ...state, transitionController: action.payload };
        },
    },
});

export const { setTransitionController } = slice.actions;

export default slice.reducer;
