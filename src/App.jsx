import { useState } from "react"

function App() {
  const[city, setCity] = useState("Rio")
  const[weatherForcast, setWeatherForcast] = useState(null);


    const handleChange = (e) => {
      setCity(e.target.value);      
  };

  const handleSearch =() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=05b1c1a8a97441f6b4f32940242105&q=${city}&lang=pt`

    )

    .then((response) => {
      if(response.status === 200){
        return response.json()
      }
      
    })
    .then((data) => {
      console.log(data)
      setWeatherForcast(data)
    });
    };

  return (
    <div >     
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <a  className="navbar-brand text-white" href="#top"  >
      Previsão do Tempo
    </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>
            Verifique agora a previsão do tempo da sua cidade
          </h1>
          <p className="lead">
            digite a cidade e clique em pesquisar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control" 
                value={city}
                />
            </div>            
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

        {weatherForcast ? (
          <div>
            <div className="mt-4 d-flex aling-items-center" > 
              <div>
                <img src= {weatherForcast.current.condition.icon} />
              </div>

              <div>
                <h3>Hoje o dia está: {weatherForcast.current.condition.text}</h3>
                <p className="lead">
                  Temp: {weatherForcast.current.temp_c}
                </p>
              </div>

            </div>
          </div>
          ) : null}

        </div>

      </main>
    
 
        
    </div> 
        
  )
}

export default App    
  


