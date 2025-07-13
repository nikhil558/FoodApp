import { useDispatch, useSelector } from "react-redux";
import { RES_CARD_IMG } from "../../utils/constants";
import { Link } from "react-router";
import { addFav, removeFav } from "../../utils/FavResSlice.js";
import { Heart, Clock, Star, MapPin } from "lucide-react";

const Resturentcard = (props) => {
  const { resCard } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, sla } =
    resCard;
  const { slaString } = sla;
  const Background = RES_CARD_IMG.concat(cloudinaryImageId);
  const dispatch = useDispatch();
  const favItems = useSelector((store) => store.favorites.items);
  const isFav = favItems.filter((each) => each.id === resCard.id);

  const handelFav = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav.length === 0) {
      dispatch(addFav(item));
    } else {
      dispatch(removeFav(item.id));
    }
  };

  return (
    <div data-testid="resCard" className="group">
      <Link to={"/resturent/" + resCard.id}>
        <div className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-card/80 backdrop-blur">
          <div className="relative">
            {/* Restaurant Image */}
            <div
              className="h-48 bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${Background})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Favorite Button */}
              <button
                onClick={(e) => handelFav(e, resCard)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 group/heart"
              >
                <Heart
                  className={`h-5 w-5 transition-all duration-200 group-hover/heart:scale-110 ${
                    isFav.length !== 0
                      ? "fill-red-500 text-red-500"
                      : "text-white hover:text-red-500"
                  }`}
                />
              </button>

              {/* Rating Badge */}
              {avgRating && (
                <div className="absolute bottom-3 left-3">
                  <div className="bg-green-600 hover:bg-green-600 text-white border-0 shadow-md px-2 py-1 flex item-center justify-center rounded-lg">
                    <Star className="w-3 h-3 mr-1 mt-1.5 fill-current" />
                    <p>{avgRating}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              {/* Restaurant Name */}
              <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                {name}
              </h3>

              {/* Cuisines */}
              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                {cuisines.join(", ")}
              </p>

              {/* Details Row */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {slaString}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {areaName}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const withPromotedResturent = (ResturentCard) => {
  return (props) => {
    const { header, subHeader } = props.resCard.aggregatedDiscountInfoV3 || {};

    return (
      <div className="group relative ">
        {/* Promotion Badge */}
        <div className="absolute  left-0 top-0 z-10 transition-all duration-300 group-hover:-translate-2">
          <div className="bg-orange-500 hover:bg-orange-500 text-white border-0 px-1.5 shadow-lg font-bold rounded-br-lg group-hover:px-2 group-hover:py-1 transition-all duration-300">
            {header} {subHeader}
          </div>
        </div>
        <ResturentCard {...props} />
      </div>
    );
  };
};

export default Resturentcard;
