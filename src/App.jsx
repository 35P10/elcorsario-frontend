import './App.css'
import HeroSection from './views/Home/HeroSection';
import PropsSection from './views/Home/PropsSection';
import ProductsSection from './views/Home/ProductsSection';
import AboutUsSection from './views/Home/AboutUsSection';
import CompromisesSection from './views/Home/CompromisesSection';
import JoinUsSection from './views/Home/JoinUsSection';

function App() {
  return (
    <>
      <header>
      <span></span>
      <ul>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Compromisos</li>
        <li>Distribución</li>
      </ul>
      </header>
      <main>
        <HeroSection />
        <PropsSection />
        <ProductsSection />
        <AboutUsSection />
        <CompromisesSection />
        <JoinUsSection />
      </main>
    </>
  )
}



export default App
