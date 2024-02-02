import { useEffect, useState } from "react";
import { getMoviesBy } from '../../services/films';

import FilmPoster from '../../components/FilmPoster'

// https://css-tricks.com/design-considerations-text-images/

function Films() {

  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  //load films...

  return (
    <section className="">
      <h1 className='font-rubiksh text-gray-200 font-extrabold text-4xl mb-3'>Películas en cartelera</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-4 ">

        {
        //showFilms
        }

      </div>

    </section>
  )
}

export default Films