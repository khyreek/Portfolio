import { configureStore } from "@reduxjs/toolkit";

import aestheticSlice from "./slices/aestheticSlice";

const store = configureStore({
    reducer: {
        aesthetic: aestheticSlice,
    },

    // required to store sockets
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
