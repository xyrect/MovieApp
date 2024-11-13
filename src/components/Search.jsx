import "bootstrap/dist/css/bootstrap.min.css";

function Search({ formVal, onSearchChange, onSearchSubmit }) {
  return (
    <div className="collapse navbar-collapse" id="navbarContent">
      <form className="d-flex ms-auto mt-3 mt-lg-0" role="search" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group input-group-sm">
          <input
            type="text"
            value={formVal}
            onChange={onSearchChange} 
            className="form-control border-0 rounded-start-pill shadow-sm"
            placeholder="Search for movies..."
            aria-label="Search"
            aria-describedby="button-addon2"
            style={{
              width: "200px",        
              padding: "8px 12px",   
              fontSize: "14px",     
            }}
          />
          <button
            className="btn rounded-end-pill shadow-sm"
            type="button"
            id="button-addon2"
            onClick={onSearchSubmit} 
            style={{
              transition: "transform 0.3s ease-in-out", 
              backgroundColor: "#ffa31a",
              fontSize: "14px",      
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            <i className="bi bi-search">Search</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
