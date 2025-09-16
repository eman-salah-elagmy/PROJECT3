
import './App.css'
import OpenedFiledBar from './component/OpenedFiledBar';
import Recursevcompnent from './component/Recursevcompnent';
import ResizablePanel from './component/ResizablePanel';
import { filetree } from './data/Filetree';


function App() {

  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
        showLeftPanel
          leftpanel={
            <div className="w-64 p-2">
              <Recursevcompnent filetree={filetree} />
            </div>
          }
          rightpanel={<OpenedFiledBar />}
        />
      </div>
    </div>
  );
}

export default App
