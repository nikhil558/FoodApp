import Resturentcard, { withPromotedResturent } from "./Resturentcard";
import Shimmer from "./Shimmer";
import useResturentList from "../../utils/useResturentList";
import { useState, useContext } from "react";
import { CommonInfo } from "../../utils/CommonInfo";
import { Search, Filter, Star, User } from "lucide-react";

const Body = () => {
  const [listSearch, setListSearch] = useState("");
  const { profileName, setUserName } = useContext(CommonInfo);

  const { listOfRes, filListOfRes, setResturentList, topRatedList } =
    useResturentList();

  const PromotedResturent = withPromotedResturent(Resturentcard);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Search */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-950 to-blue-600/60 bg-clip-text text-transparent pb-4">
            Discover Amazing Food
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the best restaurants near you and enjoy delicious meals
            delivered to your doorstep
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  data-testid="SearchInput"
                  type="search"
                  placeholder="Search restaurants, cuisines..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={listSearch}
                  onChange={(e) => setListSearch(e.target.value)}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={() => setResturentList(listSearch)}
                  className="min-w-[120px] shadow-md hover:shadow-lg transition-all flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-lg"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </button>

                <button
                  variant="outline"
                  onClick={() => topRatedList()}
                  className="min-w-[140px] shadow-md hover:shadow-lg transition-all flex items-center justify-center bg-card/80 backdrop-blur text-muted-foreground px-4 py-2 rounded-lg"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Top Rated
                </button>
              </div>
            </div>

            {/* Profile Name Input */}
            {/* <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3 max-w-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  value={profileName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {listSearch ? `Results for "${listSearch}"` : "All Restaurants"}
          </h2>
          <span className="text-muted-foreground">
            {filListOfRes.length} restaurant
            {filListOfRes.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filListOfRes.map((each) =>
            each?.info?.aggregatedDiscountInfoV3 ? (
              <PromotedResturent resCard={each.info} key={each.info.id} />
            ) : (
              <Resturentcard resCard={each.info} key={each.info.id} />
            )
          )}
        </div>

        {/* Empty State */}
        {filListOfRes.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
