import "./App.css";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's build the netflix clone</h1>
      </header>

      <main className="App-body">
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </main>
    </div>
  );
}

export default App;
