import { useState } from "react";
import type { IFile } from "../interfces";
// import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import Renderfileicon from "./Renderfileicon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../apps/Store";
import { doesFileobjectExist } from "../utils/function";
import { setClickedfile, setopenedFiles } from "../apps/features/filetreeslice";

// import { filetree } from "../data/Filetree";

interface IProps{
  filetree:IFile;
}

const Recursevcompnent= ({filetree }:IProps) => {
  const {id, name, isFolder, children ,content} = filetree;
  const dispatch=useDispatch()
  const { openfile } = useSelector((state: RootState) => state.tree);
  const [isopen,setIsOpen]=useState<boolean>(false)

  //Handlers
  const toggle=()=>setIsOpen(prev=>!prev)
  const onFileclicked = () => {
    const exists=doesFileobjectExist(openfile,id);
    dispatch(setClickedfile({ filename: name, filecontent: content ,activetabid:id}));
    if(exists){return}
    dispatch(setopenedFiles([...openfile, filetree]))
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1.5">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isopen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <Renderfileicon
              filename={name}
              isfolder={isFolder}
              isopen={isopen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="mr-2 flex items-center" onClick={onFileclicked}>
            <Renderfileicon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>
      {isopen &&
        children &&
        children.map((file, idx) => (
          <Recursevcompnent filetree={file} key={idx} />
        ))}
    </div>
  );
}

export default Recursevcompnent ;