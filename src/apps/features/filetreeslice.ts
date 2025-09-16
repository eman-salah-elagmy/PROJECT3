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
}


const initialState:IinitialState={
  openfile: [],
  clickedfile: {
    activetabid: null,
    filename: "",
    filecontent: ""
  },
}

const filetreeslice = createSlice({
  name: "filetree",
  initialState,
  reducers: {
    setopenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openfile = action.payload;
    },
    setClickedfile:(state,action:PayloadAction<Iclickedfile>)=>{
      state.clickedfile=action.payload;
    }
  },
});

export const { setopenedFiles, setClickedfile} = filetreeslice.actions; 


export default filetreeslice.reducer;