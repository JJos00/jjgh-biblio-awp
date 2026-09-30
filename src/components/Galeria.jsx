import { useState, useEffect } from 'react'
import TarjetaImagen from './TarjetaImagen'

function Galeria() {
  const [imagenes, setImagenes] = useState([])
  const [cargando, setCargando] = useState(true)

  const obtenerImagenes = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4')
    const datos = await respuesta.json()
    
    setImagenes(datos)
    setCargando(false)
  }

  useEffect(() => {
    setTimeout(() => {
      obtenerImagenes()
    }, 3000)
  }, [])

  if (cargando) {
    return <h2 className="text-center mt-5 text-dark">Cargando imagenes</h2>
  }

  return (
    <div className="container pb-5">
      <div className="row">
        {imagenes.map((img) => {
          return <TarjetaImagen key={img.id} imagen={img} />
        })}
      </div>
    </div>
  )
}

export default Galeria