import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { getMovie } from "../components/services/GetServices";

export const Movies = () => {
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    //   const res = await axios.get(API);
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.error(error.message);
      //   console.error(error.response.status);
      //   console.error(error.response.data);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMovieData();
  }, []);
  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })}
    </ul>
  );
};
