import Encabezado from './components/Encabezado'
import Galeria from './components/Galeria'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  return (
    <div className="bg-light min-vh-100 font-sans">
      <Encabezado titulo="Biblioteca de fotos" />
      <main>
        <Galeria />
      </main>
      <PWABadge />
    </div>
  )
}

export default App
