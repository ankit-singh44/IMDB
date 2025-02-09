const LoadingSpinner3 = () => {
  return (
      <div className="flex flex-col items-center justify-center pt-8 pb-8">
          <div className="flex space-x-2">
              <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce"></div>
              <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce2"></div>
              <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce"></div>
          </div>
          <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-700">
                  Loading...
              </p>
              <p className="text-sm text-gray-500">
                  Your Movies is on its way!
              </p>
          </div>
      </div>
  );
};

export default LoadingSpinner3;