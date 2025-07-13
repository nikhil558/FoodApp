import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  HeadphonesIcon,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@fooddelivery.com", "info@fooddelivery.com"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Food Street", "Delicious City, DC 12345"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 11PM", "Sat-Sun: 10AM - 12AM"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: HeadphonesIcon,
      title: "Phone Support",
      description: "Speak directly with our customer service",
      action: "Call Now",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries via email",
      action: "Send Email",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2">
              Get In Touch
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions, feedback, or need assistance? Our friendly support
              team is ready to help you with anything you need, 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-4">
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold">{info.title}</div>
              </div>
              <div className="text-center">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Options */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Can We Help?
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the support option that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${option.gradient} backdrop-blur-sm hover:scale-105`}
            >
              <div className="text-center pt-4">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{option.title}</div>
                <div className="text-lg">{option.description}</div>
              </div>
              <div className="text-center">
                <button className="w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  {option.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about our service, delivery,
            and more.
          </p>
          <button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
