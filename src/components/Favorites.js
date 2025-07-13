import { useDispatch, useSelector } from "react-redux";
import Resturentcard from "./Resturentcard";
import { clearFav } from "../../utils/FavResSlice";
import { Heart, Trash2 } from "lucide-react";

const Favorites = () => {
  const favoriteItems = useSelector((store) => store.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-950 to-blue-600/60 bg-clip-text text-transparent mb-2">
            Your Favorites
          </h1>
          <p className="text-muted-foreground">
            {favoriteItems.length} restaurant
            {favoriteItems.length !== 1 ? "s" : ""} you love
          </p>
        </div>

        {favoriteItems.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            {/* Actions */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500 fill-current" />
                <span className="font-medium">Favorite Restaurants</span>
              </div>
              <button
                onClick={() => dispatch(clearFav())}
                className="shadow-md hover:shadow-lg transition-all flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Favorites
              </button>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteItems.map((each) => (
                <Resturentcard resCard={each} key={each.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-8">
              Start exploring and add restaurants to your favorites!
            </p>
            <button className="btn bg-gradient-to-r from-blue-950 to-blue-600/60 text-amber-50 p-2 rounded-lg">
              <a href="/">Discover Restaurants</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
