// HomePage.js
import React , {useEffect, useState} from 'react';
import { getMovie } from '../../services/services';
import MovieList from '../../components/movieList';
import MovieListLoading from '../../components/loadingHome';

import './style.css';


const HomePage = () => {
  const [data,setData] = useState({}); //el useState es una funcion, esto se debe cumpluir para los states en react.
        // useState es la funcion, data es la variable y set data es la que sera modificada por la funcion. 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getMovie(newPage)
    .then((result)=>{
      setData(result.data);
      setLoading(false);
    })

  };
     
  useEffect(()=>{
    if(loading){
      getMovie(currentPage)
      .then((result)=>{
        setData(result.data);
        setLoading(false);
      })
    
    }

  },[data])

  return (
    <div className='home-view'    data-testid='home-view'> 
      {
        !loading?
        <MovieList 
        data={data.results} 
        page={currentPage} 
        cantPage={data.total_pages}
        handleClickPage={handlePageChange}
        />
        : <MovieListLoading/>
      }
     
    </div>
  );
}

export default HomePage;
