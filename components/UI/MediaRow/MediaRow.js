/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import axios from "axios";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);


///discover/movie?with_genres=35&primary_release_year=2021

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=56af654a7922841f5b71cdbc941677dd&language=en-US`
      )
      .then(function (response) {
        setMoviesData(response.data.results);
        setLoadingData(false);

        // handle success
        console.log("success Response For " + props.title);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const showThumbnails = () => {

    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
      // eslint-disable-next-line react/jsx-key
      return <Thumbnail movieData={movie} />
        });
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails()}

        {/*}  {loopComp((<Thumbnail/>), 10)}   */}
      </div>
    </div>
  );
};

const Thumbnail = (props) => {
  return (
    <div className="media-row__thumbnail ">
      <img
        src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
        alt=""/>
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
