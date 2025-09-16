import type { IFile } from "../interfces";

export const doesFileobjectExist=(arr:IFile[],id:string)=>{
  return arr.some(Obj=>Obj.id===id)
}