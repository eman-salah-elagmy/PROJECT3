import type { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps{
defaultLayout?:number[]|undefined;
leftpanel:ReactNode;
rightpanel:ReactNode;
showLeftPanel:boolean;

}

const ResizablePanel= ({defaultLayout=[33,67],leftpanel,rightpanel,showLeftPanel}:IProps) => {
  const onLayout=(sizes:number[])=>{
    document.cookie=`react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showLeftPanel&&(
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>{leftpanel}</Panel>
          <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
        </>)}

      <Panel defaultSize={defaultLayout[1]}>{rightpanel}</Panel>
    </PanelGroup>
  );
}

export default ResizablePanel;