
import './App.css'
import OpenedFiledBar from './component/OpenedFiledBar';
import Recursevcompnent from './component/Recursevcompnent';
import { filetree } from './data/Filetree';


function App() {

  return (
    <div >
      <div className="flex h-screen">
        <div className="w-64 border-r border-white">
          <Recursevcompnent filetree={filetree} />
        </div>
        <OpenedFiledBar />
      </div>
    </div>
  );
}

export default App
