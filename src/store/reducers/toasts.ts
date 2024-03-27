import { createSlice } from "@reduxjs/toolkit";

interface IToasts {
  welcomeLinkedIn: boolean;
  welcomeCV: boolean;
}
const initialState = {
  welcomeLinkedIn: false,
  welcomeCV: false,
};

export const slice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    setWelcomeLinkedIn: (state, { payload }) => {
      return {
        ...state,
        welcomeLinkedIn: payload,
      };
    },
    setWelcomeCV: (state, { payload }) => {
      return {
        ...state,
        welcomeCV: payload,
      };
    },
  },
});

export const { setWelcomeLinkedIn, setWelcomeCV } = slice.actions;
export default slice.reducer;
export const selectorToasts = (state: { toasts: IToasts }): IToasts =>
  state.toasts;
