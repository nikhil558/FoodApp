import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Award, label: "Restaurant Partners", value: "1000+" },
    { icon: Clock, label: "Years of Service", value: "5+" },
    { icon: Heart, label: "Orders Delivered", value: "1M+" },
  ];

  const features = [
    {
      title: "Lightning Fast Delivery",
      description: "Get your favorite food delivered in 30 minutes or less",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Quality Assurance",
      description: "We ensure every meal meets our high-quality standards",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Wide Selection",
      description: "Choose from thousands of restaurants and cuisines",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Best Prices",
      description: "Competitive pricing with exclusive deals and offers",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2">
              About Our Story
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent pb-6">
              Bringing Food & Joy Together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're passionate about connecting food lovers with their favorite
              restaurants, delivering not just meals but memorable experiences
              right to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm"
            >
              <div className="pt-6">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground">
            We're committed to providing the best food delivery experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm hover:scale-105 px-3 py-2`}
            >
              <div>
                <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </div>
              </div>
              <div>
                <div className="text-lg leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            To revolutionize food delivery by creating seamless connections
            between restaurants and customers, ensuring every meal is delivered
            with care, speed, and a smile. We believe great food brings people
            together, and we're here to make that happen, one delivery at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
