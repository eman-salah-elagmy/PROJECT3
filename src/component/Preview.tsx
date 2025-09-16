import { useSelector } from "react-redux";
import FileSyntax from "./FileSyntax";
import OpenedFiledBar from "./OpenedFiledBar";
import type { RootState } from "../apps/Store";


const Preview= () => {
      const {clickedfile:{filecontent} } = useSelector(
        (state: RootState) => state.tree
      );
  return (
    <>
      <OpenedFiledBar />
      <FileSyntax content={filecontent} />
    </>
  );
}

export default Preview;