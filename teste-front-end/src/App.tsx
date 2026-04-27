import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Vitrine } from './components/Vitrine';
import { Footer } from './components/Footer';
import './styles/global.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Banner />
        <Vitrine />
      </main>
      <Footer />
    </div>
  )
}

export default App;