import {
  ShoppingCart,
  Truck,
  Clock,
  Leaf,
  Apple,
  Milk,
  Beef,
  Carrot,
} from "lucide-react";

const Grocery = () => {
  const categories = [
    {
      icon: Apple,
      name: "Fresh Fruits",
      description: "Handpicked seasonal fruits",
      items: "50+ items",
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Carrot,
      name: "Vegetables",
      description: "Farm-fresh organic vegetables",
      items: "80+ items",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Milk,
      name: "Dairy Products",
      description: "Fresh milk, cheese & yogurt",
      items: "30+ items",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Beef,
      name: "Meat & Seafood",
      description: "Premium quality meat & fish",
      items: "25+ items",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above $50",
    },
    {
      icon: Clock,
      title: "2-Hour Delivery",
      description: "Quick grocery delivery",
    },
    {
      icon: Leaf,
      title: "Organic Options",
      description: "Fresh & healthy choices",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2">
              Fresh & Convenient
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Grocery Delivered Fresh
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Get farm-fresh groceries delivered to your doorstep in just 2
              hours. Quality ingredients for your kitchen, whenever you need
              them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
              </button>
              <button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm pb-2"
            >
              <div className="pt-8">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground">
            Fresh ingredients for every meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm hover:scale-105 cursor-pointer pt-4`}
            >
              <div className="text-center">
                <div className="mb-4">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold">{category.name}</div>
                <div className="text-sm">{category.description}</div>
              </div>
              <div className="text-center">
                <div variant="secondary" className="bg-white/50">
                  {category.items}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
