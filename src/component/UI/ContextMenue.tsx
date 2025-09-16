import { useEffect, useRef } from "react";

interface IProps {
  setshowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const DropMenue= ({position:{x,y},setshowMenu}:IProps) => {
  const menuRef=useRef<HTMLDivElement>(null);

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
        <li>close </li>
        <li>close all</li>
      </ul>
    </div>
  );
}

export default DropMenue;