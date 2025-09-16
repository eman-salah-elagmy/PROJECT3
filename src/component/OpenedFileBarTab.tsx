import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfces";
import Renderfileicon from "./Renderfileicon";
import CloseIcon from "./SVG/CloseIcon";
import type { RootState } from "../apps/Store";
import { setClickedfile } from "../apps/features/filetreeslice";

interface IProps{
file:IFile;
}

const OpenedFileBarTab= ({file}:IProps) => {
  const dispatch=useDispatch()
  const { clickedfile:{activetabid } }= useSelector((state: RootState) => state.tree); 
  //Handlers
  const onclick=()=>{
    const {id,name,content}=file;
    dispatch(setClickedfile({ filename: name, filecontent: content ,activetabid:id}));
  }
  return (
    <div
      className="flex items-center p-2"
      onClick={onclick}
      style={{
        borderTop:
          file.id === activetabid ? "2px soild #cf6ccf" : "2px soild transparent",
      }}
    >
      <Renderfileicon filename={file.name} />
      <span className="cursor-pointer flex justify-center items-center w-fit mx-2 p-1 rounded-md duration-300 ">
        {file.name}
      </span>
      <span className="cursor-pointer flex justify-center items-center w-fit mr-2 p-1 rounded-md duration-300 ">
        <CloseIcon />
      </span>
    </div>
  );
    
}

export default OpenedFileBarTab;