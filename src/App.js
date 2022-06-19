import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './header/NavHeader';

import Home from './home/Home';
import Stories from './stories/Stories';
import Dict from './dict/Dict';

import DictContent from './dict/DictContent';
import TilContent from './stories/til/TilContent';

import NotFound from './notFound/NotFound';
import ArchieveContent from './stories/archive/ArchiveContent';
import WritingContent from './stories/writing/WritingContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/dict" element={<Dict/>} />
          <Route path="/stories/:type" element={<Stories/>}></Route>
          <Route path="/dict/*" element={<DictContent/>}></Route>
          <Route path="/stories/til/:tilDate" element={<TilContent/>}></Route>
          <Route path="/stories/archive/:postName" element={<ArchieveContent/>}></Route>
          <Route path="/stories/writing/:postName" element={<WritingContent/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
