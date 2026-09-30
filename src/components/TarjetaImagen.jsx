function TarjetaImagen(propiedades) {
  const { url, title } = propiedades.imagen

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-primary">
        <img src={url} className="card-img-top" alt="imagen" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title text-capitalize fw-bold text-dark">{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default TarjetaImagen