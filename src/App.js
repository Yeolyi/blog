import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './header/NavHeader';

import Home from './home/Home';
import Stories from './stories/Stories';
import TilContent from './stories/til/TilContent';

import TilList from './stories/til/TilList';

import NotFound from './notFound/NotFound';
import ArchieveList from './stories/archive/ArchiveList';
import ArchieveContent from './stories/archive/ArchiveContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/dict" element={<p>dict</p>} />
          <Route path="/stories" element={<Stories/>}>
            <Route path="til" element={<TilList/>}/>
            <Route path="archive" element={<ArchieveList/>}/>
          </Route>
          <Route path="/stories/til/:tilDate" element={<TilContent/>}></Route>
          <Route path="/stories/archive/:postName" element={<ArchieveContent/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
