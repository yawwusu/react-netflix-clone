import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />
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
