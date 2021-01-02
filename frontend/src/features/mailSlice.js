import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null, //to store the email row details that was clicked
    sendMessageIsOpen: false, //to store the state of the new mail window ie. open/close
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload; //action.payload contains the data that was sent by the component(EmailRow)
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true; //on clicking the compose button
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false; //on clicking the close button in the new mail window
    }
  },
});

//export various actions so that other components can access it to update the store(data layer)
export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

//store the state in a selector so that other components can access the current state
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
