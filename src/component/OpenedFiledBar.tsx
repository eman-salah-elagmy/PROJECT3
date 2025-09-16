import { useSelector } from "react-redux";
import type { RootState } from "../apps/Store";
import OpenedFileBarTab from "./OpenedFileBarTab";
// import FileSyntax from "./FileSyntax";
import DropMenue from "./UI/ContextMenue";
import { useState } from "react";

// interface IProps{

// }

const OpenedFiledBar = () => {
  const { openfile } = useSelector((state: RootState) => state.tree);
  const [showMenu, setshowMenu] = useState(false);
  const [menuPosition, setmenuPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  return (
    <div>
      <div
        className="flex items-center"
        onContextMenu={(e) => {
          e.preventDefault();
          setmenuPosition({ x: e.clientX, y: e.clientY });
          setshowMenu(true);
        }}
      >
        {openfile.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <DropMenue position={menuPosition} setshowMenu={setshowMenu} />
      )}
    </div>
  );
};

export default OpenedFiledBar;
