import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './request';
import Row from './Row';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <SearchBar />
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> */}
      <Row title="Recently Added" fetchUrl={requests.fetchRecentlyAdded}/>
      <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTVShows}/>
    </div>
  );
}

export default App;
