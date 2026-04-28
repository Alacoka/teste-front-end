import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Vitrine } from './components/Vitrine';
import { Footer } from './components/Footer';
import { Categories } from './components/Categories';
import { Partners } from './components/Partners';
import { Brands } from './components/Brands';
import { VitrineDois } from './components/Vitrine/index2';
import './styles/global.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Banner />
        <Categories />
        <Vitrine />
        <Partners />
        <VitrineDois />
        <Partners />
        <Brands />
        <VitrineDois />
      </main>
      <Footer />
    </div>
  )
}

export default App;