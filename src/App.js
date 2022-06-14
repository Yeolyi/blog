import './App.css';
import Header from './header/NavHeader';
import Container from './container/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from './notFound/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/dev" element={<p>dev</p>} />
          <Route path="/dict" element={<p>dict</p>} />
          <Route path="/stories" element={<p>stories</p>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
