import "bootstrap/dist/css/bootstrap.min.css";

function Movie({ img, textTitle }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
      <div
        className="card"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <div className="ratio ratio-1x1">
          <img
            src={img}
            alt={textTitle}
            className="card-img-top movie-img"
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
              borderRadius: '20px 20px 0 0',
            }}
          />
        </div>
        <div className="card-body text-white text-center" style={{ backgroundColor: "#1b1b1b", borderRadius: '0 0 20px 20px' }}>
          <p className="card-text" style={{fontWeight: 'bold'}}>{textTitle}</p>
        </div>
      </div>

      <style>
        {`
          .movie-img:hover {
            transform: scale(1.1);  /* Enlarges the image on hover */
          }
        `}
      </style>
    </div>
  );
}

export default Movie;
