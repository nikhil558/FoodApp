import { useDispatch, useSelector } from "react-redux";
import { RES_CARD_IMG } from "../../utils/constants";
import { addItem, removeItem } from "../../utils/CartSlice";
import { Plus, IndianRupee, Minus } from "lucide-react";

const ItemList = ({ resCard }) => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const isItemInCart =
    cart.length !== 0
      ? cart.filter((item) => item.card.info.id === resCard.card.info.id)
      : [];

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const price = resCard.card.info.price || resCard.card.info.defaultPrice || 0;
  const formattedPrice = (price / 100).toFixed(2);

  return (
    <div
      data-testid="itemId"
      className="border-0 border-b border-border/50 rounded-none last:border-b-0 shadow-none bg-transparent"
    >
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          {/* Item Details */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-lg leading-tight">
                {resCard.card.info.name}
              </h3>
              {resCard.card.info.isVeg !== undefined && (
                <div
                  variant={
                    resCard.card.info.isVeg ? "secondary" : "destructive"
                  }
                  className="ml-2"
                >
                  {resCard.card.info.isVeg ? "VEG" : "NON-VEG"}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-1 text-lg font-semibold text-primary">
              <IndianRupee className="h-4 w-4" />
              <span>{formattedPrice}</span>
            </div>

            {resCard.card.info.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {resCard.card.info.description}
              </p>
            )}

            {resCard.card.info.ratings?.aggregatedRating?.rating && (
              <div className="flex items-center space-x-1 ">
                <div className="bg-green-600 hover:bg-green-600 text-white border-0 px-2 rounded-lg">
                  ⭐ {resCard.card.info.ratings.aggregatedRating.rating}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({resCard.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </div>
            )}
          </div>

          {/* Image and Add Button */}
          <div className="relative flex-shrink-0">
            {resCard.card.info.imageId && (
              <div className="relative">
                <img
                  src={RES_CARD_IMG + resCard.card.info.imageId}
                  alt={resCard.card.info.name}
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <button className="shadow-lg hover:shadow-xl transition-all bg-white font-bold px-4 flex items-center justify-center rounded-lg">
                    {isItemInCart.length !== 0 && (
                      <Minus
                        onClick={() => handelRemoveItem(resCard)}
                        className="w-4 h-4 mr-1"
                      />
                    )}
                    {isItemInCart.length !== 0 ? (
                      <span>{isItemInCart.length}</span>
                    ) : (
                      <span onClick={() => handelAddItem(resCard)}>ADD</span>
                    )}
                    {isItemInCart.length !== 0 && (
                      <Plus
                        onClick={() => handelAddItem(resCard)}
                        className="w-4 h-4 ml-1"
                      />
                    )}
                  </button>
                </div>
              </div>
            )}

            {!resCard.card.info.imageId && (
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                <button
                  onClick={() => handelAddItem(resCard)}
                  size="sm"
                  className="shadow-lg hover:shadow-xl transition-all font-bold px-6"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  <span>ADD</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
