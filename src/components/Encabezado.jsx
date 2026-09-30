function Encabezado(propiedades) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4 shadow">
      <div className="container">
        <span className="navbar-brand mb-0 h1 fs-3">
          <i className="bi bi-images me-2"></i>
          {propiedades.titulo}
        </span>
      </div>
    </nav>
  )
}

export default Encabezado