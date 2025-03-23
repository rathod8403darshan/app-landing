import React from "react";

const CardSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-whitered-900">
          Why Choose ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🏏</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Multiple Sports
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Play fantasy cricket, football, kabaddi, and more!
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Win Big
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compete in contests and win exciting prizes
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Easy to Play
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simple interface and quick team selection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
