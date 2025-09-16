
import { useSelector } from 'react-redux';
import './App.css'
import type { RootState } from './apps/Store';
import OpenedFiledBar from './component/OpenedFiledBar';
import Preview from './component/Preview';
import Recursevcompnent from './component/Recursevcompnent';
import ResizablePanel from './component/ResizablePanel';
import { filetree } from './data/Filetree';
import WelcomeTab from './component/WelcomeTab';


function App() {
    const { openfile } = useSelector(({tree}: RootState) =>tree); 
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
          rightpanel={openfile.length?<Preview/>:<WelcomeTab/>}
        />
      </div>
    </div>
  );
}

export default App
