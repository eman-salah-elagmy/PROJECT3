
import Iconimage from "./Iconimage";
import FileIcon from "./SVG/Fileicon";
import { extensionpath } from "../constant";

interface IProps{

filename:string,
isfolder?:boolean,
isopen?:boolean
}


const Renderfileicon= ({filename,isfolder,isopen}:IProps) => {
  const extension=filename.split('.').pop();
  if(extension&& Object.prototype.hasOwnProperty.call(extensionpath,extension)){
    const iconpath = isfolder
      ? isopen
        ? `${extensionpath[extension]}-open.svg`
        : `${extensionpath[extension]}.svg`
      : `${extensionpath[extension]}.svg`;
      return <Iconimage src={iconpath}/>
  }
  
  if(isfolder&&isopen) return <Iconimage src="../../public/icons/folder-default-open.svg" />;
  if(isfolder&& !isopen) return <Iconimage src="../../public/icons/folder-default.svg" />;
  return <FileIcon/>

  
}

export default Renderfileicon;