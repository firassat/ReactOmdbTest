const MovieModal = ({ movieInfo, handleClose }) => {
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="modal-body">
          <div className="modal-img">
            <img src={movieInfo.Poster} alt="Poster" />
          </div>
        </div>
        <div className="modal-info">
          <p>
            <b>Actors:</b> {movieInfo.Actors}
          </p>
          <p>
            <b>Genre:</b> {movieInfo.Genre}
          </p>
          <p>
            <b>Director:</b> {movieInfo.Director}
          </p>
          <p>
            <b>Plot:</b> {movieInfo.Plot}
          </p>
          <div style={{ display: "flex" }}>
            <b>Ratings:</b>

            {movieInfo.Ratings.map((rate, i) => (
              <div key={i} style={{ padding: "10px" }}>
                <p>{rate.Source}</p>
                <p>{rate.Value}</p>
              </div>
            ))}
          </div>
          <button className="modal-closebtn" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default MovieModal;
