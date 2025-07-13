import { useState, useEffect } from "react";

const useResturentList = () => {
  const [listOfRes, set_resturent_list] = useState([]);
  const [filListOfRes, setFilResturentList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627"
    );

    const JSON = await Data.json();

    set_resturent_list(
      JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilResturentList(
      JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const setResturentList = (listSearch) => {
    let FltList = listOfRes.filter((each) =>
      each.info.name.toLowerCase().includes(listSearch.toLowerCase())
    );
    setFilResturentList(FltList);
  };

  const topRatedList = () => {
    const filteredList = listOfRes.filter((each) => each.info.avgRating >= 4.4);
    setFilResturentList(filteredList);
  };

  return { listOfRes, filListOfRes, setResturentList, topRatedList };
};

export default useResturentList;
