import { useEffect, useRef } from "react";
import { setopenedFiles } from "../../apps/features/filetreeslice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../apps/Store";

interface IProps {
  setshowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const DropMenue= ({position:{x,y},setshowMenu}:IProps) => {
  const dispatch=useDispatch()
  const menuRef=useRef<HTMLDivElement>(null);
  const { openfile, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );
  //Handlers
  const closeAll=()=>{
    dispatch(setopenedFiles([]))
    setshowMenu(false);
  }
  const onClose = () => {
    const filtered = openfile.filter((file) => file.id !== tabIdToRemove);
    dispatch(setopenedFiles(filtered));
    setshowMenu(false);
  };

  useEffect(() => {
    const handelClickOutside = (event:MouseEvent) => {
      if(menuRef.current&&!menuRef.current.contains(event?.target as Node)){
        setshowMenu(false);
      }
    };
    window.addEventListener("click", handelClickOutside);

    return () => {
      window.removeEventListener("click", handelClickOutside);
    };
  }, [setshowMenu]);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md"
        style={{ position: "absolute", left: x, top: y }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={closeAll}
        >
          close all
        </li>
      </ul>
    </div>
  );
}

export default DropMenue;