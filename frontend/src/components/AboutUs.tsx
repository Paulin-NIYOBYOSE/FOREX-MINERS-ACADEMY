import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Community and Support Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image/Graphic Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src="/community-illustration.png" // Replace with your community image path
              alt="Community Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/icon-community.png" // Replace with your icon path
                    alt="Community Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Engage with Traders
                  </h3>
                  <p className="text-gray-600">
                    Be part of a thriving community of forex traders where you
                    can share insights and strategies.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/icon-support.png" // Replace with your icon path
                    alt="Support Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available around the clock to
                    assist with any of your needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/icon-resources.png" // Replace with your icon path
                    alt="Resources Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Access to Resources
                  </h3>
                  <p className="text-gray-600">
                    Get access to exclusive resources, including webinars,
                    eBooks, and market analysis reports.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Platform Overview Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Empower Your Forex Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mentorship Card */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/icon-mentorship.png" // Replace with your mentorship image path
                  alt="Forex Mentorship"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Forex Mentorship
              </h3>
              <p className="text-gray-600 mb-4">
                Learn from the best with our comprehensive mentorship program
                designed to take your trading to the next level.
              </p>
              <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-medium py-2 px-4 rounded">
                Learn More
              </button>
            </div>

            {/* Signal Subscription Card */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/icon-signals.png" // Replace with your signals image path
                  alt="Signal Subscription"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Signal Subscription
              </h3>
              <p className="text-gray-600 mb-4">
                Gain access to our premium signals and setups to enhance your
                trading strategy with expert insights.
              </p>
              <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-medium py-2 px-4 rounded">
                Subscribe Now
              </button>
            </div>

            {/* AI Trading Bot Card */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/icon-ai-bot.png" // Replace with your AI bot image path
                  alt="AI Trading Bot"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                AI Trading Bot
              </h3>
              <p className="text-gray-600 mb-4">
                Automate your trades with our state-of-the-art AI trading bot,
                designed for optimal performance.
              </p>
              <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-medium py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
