import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './header/NavHeader';
import Container from './container/Container';

import Home from './home/Home';
import Stories from './stories/Stories';
import TilContent from './stories/til/TilContent';

import NotFound from './notFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/dict" element={<p>dict</p>} />
          <Route path="/stories" element={<Stories />}/>
          <Route path="/stories/:tilDate" element={<TilContent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
