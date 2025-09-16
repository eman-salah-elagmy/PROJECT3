import { useSelector } from "react-redux";
import type { RootState } from "../apps/Store";
import OpenedFileBarTab from "./OpenedFileBarTab";
import FileSyntax from "./FileSyntax";

// interface IProps{


// }

const OpenedFiledBar= () => {
    const { openfile,clickedfile } = useSelector((state: RootState) => state.tree); 
  return (
    <div>
      <div className="flex items-center">{openfile.map(file=>(
        <OpenedFileBarTab key={file.id} file={file}/>
      ))}</div>
      <FileSyntax content={clickedfile.filecontent}/>
    </div>
  );
}

export default OpenedFiledBar;