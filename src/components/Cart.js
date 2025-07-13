import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../utils/CartSlice";
import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const uniqueCart = cartItems.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.card.info.id === item.card.info.id)
  );

  const clearCart = () => {
    dispatch(clearItem());
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.card.info.price || item.card.info.defaultPrice || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-950 to-blue-600/60 bg-clip-text text-transparent mb-2">
            Your Cart
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {/* Cart Actions */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="font-medium">Cart Items</span>
              </div>
              <button
                variant="destructive"
                onClick={clearCart}
                className="shadow-md hover:shadow-lg transition-all flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </button>
            </div>

            {/* Cart Items */}
            <div className="shadow-lg border-0 bg-card/80 backdrop-blur mb-6">
              <div className="p-0">
                {uniqueCart.map((each) => (
                  <ItemList resCard={each} key={each.card.info.id} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="shadow-lg border-0 bg-card/80 backdrop-blur px-4 py-2">
              <div>
                <div className="flex items-center justify-between">
                  <span>Order Summary</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{(totalAmount / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              <div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{(totalAmount / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>₹40.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>₹{((totalAmount * 0.18) / 100).toFixed(2)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      ₹{((totalAmount * 1.18 + 4000) / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="btn bg-blue-600 text-amber-50 p-2 w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-8">
              Add some delicious items to get started!
            </p>
            <button className="btn bg-gradient-to-r from-blue-950 to-blue-600/60 text-amber-50 p-2 rounded-lg">
              <a href="/">Start Shopping</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
