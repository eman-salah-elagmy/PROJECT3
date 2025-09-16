import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfces";

interface Iclickedfile {
  activetabid: string|null;
  filename: string;
  filecontent: string | undefined;
}

interface IinitialState {
  openfile: IFile[];
  clickedfile:Iclickedfile;
  tabIdToRemove:string|null;
}


const initialState:IinitialState={
  openfile: [],
  clickedfile: {
    activetabid: null,
    filename: "",
    filecontent: ""
  },
  tabIdToRemove:null,
}

const filetreeslice = createSlice({
  name: "filetree",
  initialState,
  reducers: {
    setopenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openfile = action.payload;
    },
    setClickedfile: (state, action: PayloadAction<Iclickedfile>) => {
      state.clickedfile = action.payload;
    },
    settabIdToRemove: (state, action: PayloadAction<string|null>) => {
      state.tabIdToRemove = action.payload;
    },
  },
});

export const { setopenedFiles, setClickedfile, settabIdToRemove } =
  filetreeslice.actions; 


export default filetreeslice.reducer;