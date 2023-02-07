import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ChannelState {
  channelId: string;
  channelName: string;
}

const initialState: ChannelState = {
  channelId: "",
  channelName: "",
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state, action: PayloadAction<ChannelState>) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;

export const selectChannelId = (state: RootState) => state.channel.channelId;
export const selectChannelName = (state: RootState) =>
  state.channel.channelName;

export default channelSlice.reducer;
