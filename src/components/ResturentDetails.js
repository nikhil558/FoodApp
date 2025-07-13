import { useState } from "react";
import Shimmer from "./Shimmer.js";
import ResturentCategory from "./ResturentCategory.js";
import { useParams } from "react-router";
import useResturentDetails from "../../utils/useResturentDetails.js";
import { Star, Clock, MapPin, IndianRupee } from "lucide-react";

const ResturentDetails = () => {
  const [categoryItem, setCategoryItem] = useState(null);
  const { resid } = useParams();
  const resDetails = useResturentDetails(resid);

  const HandlingCategory = (index) => {
    categoryItem !== index ? setCategoryItem(index) : setCategoryItem(null);
  };

  if (resDetails === null) {
    return <Shimmer />;
  }

  const groupedCardObj = resDetails?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const itemCards =
    groupedCardObj?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const itemCategory = itemCards.filter(
    (each) =>
      each?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Extract restaurant info
  const infoCard = resDetails?.cards?.find((card) => card?.card?.card?.info);

  const restaurantInfo = infoCard?.card?.card?.info || {};
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restaurantInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Restaurant Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="shadow-xl border-0 bg-card/80 backdrop-blur">
            <div className="pb-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-950 to-blue-600/60 bg-clip-text text-transparent pb-4">
                  {name ||
                    resDetails?.cards?.[0]?.card?.card?.text ||
                    "Restaurant"}
                </div>
              </div>
            </div>

            {restaurantInfo.name && (
              <div className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  {/* Rating */}
                  {avgRating && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-bold text-lg">{avgRating}</span>
                      </div>
                      <div variant="secondary" className="text-xs">
                        {totalRatingsString}
                      </div>
                    </div>
                  )}

                  {/* Delivery Time */}
                  {sla?.slaString && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="font-bold text-lg">
                          {sla.slaString}
                        </span>
                      </div>
                      <div variant="secondary" className="text-xs">
                        Delivery Time
                      </div>
                    </div>
                  )}

                  {/* Cost */}
                  {costForTwoMessage && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <IndianRupee className="h-5 w-5 text-green-500" />
                        <span className="font-bold text-lg">
                          {costForTwoMessage}
                        </span>
                      </div>
                      <div variant="secondary" className="text-xs">
                        For Two
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {areaName && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-5 w-5 text-red-500" />
                        <span className="font-bold text-lg">{areaName}</span>
                      </div>
                      <div variant="secondary" className="text-xs">
                        Location
                      </div>
                    </div>
                  )}
                </div>

                {/* Cuisines */}
                {cuisines && (
                  <div className="mt-6 pt-6 pb-4 border-t border-border/50">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 text-center">
                      CUISINES
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {cuisines.slice(0, 6).map((cuisine, index) => (
                        <div key={index} variant="outline" className="text-xs">
                          {cuisine}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
          {itemCategory.map((each, index) => (
            <ResturentCategory
              resCategory={each}
              key={each.card.card.categoryId}
              showItem={index === categoryItem ? true : false}
              handel={() => HandlingCategory(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturentDetails;
