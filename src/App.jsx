import { useState } from 'react'
import './App.css'
import HeroSection from './views/home/HeroSection';
import PropsSection from './views/home/PropsSection';
import ProductsSection from './views/home/ProductsSection';

function App() {
  const [count, setCount] = useState(0)

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
      </main>
      <footer>
        
      </footer>
    </>
  )
}

/*
        <AboutUsSection />
        <CompromisesSection />
        <JoinUsSection />
*/

export default App
