const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="skeleton h-12 md:h-16 w-3/4 mx-auto mb-4"></div>
          <div className="skeleton h-6 w-1/2 mx-auto mb-8"></div>
        </div>

        {/* Search Card Skeleton */}
        <div className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="skeleton h-12 flex-1"></div>
              <div className="flex gap-3">
                <div className="skeleton h-12 w-[120px]"></div>
                <div className="skeleton h-12 w-[140px]"></div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="skeleton h-10 w-64"></div>
            </div>
          </div>
        </div>

        {/* Results Header Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <div className="skeleton h-8 w-48"></div>
          <div className="skeleton h-6 w-32"></div>
        </div>

        {/* Restaurant Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden border-0 shadow-md bg-card/80 backdrop-blur"
            >
              <div className="relative">
                <div className=" skeleton h-48 w-full"></div>
                <div className="p-4">
                  <div className="skeleton h-6 w-3/4 mb-2"></div>
                  <div className="skeleton h-4 w-full mb-3"></div>
                  <div className="flex items-center justify-between">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-16"></div>
                  </div>
                  <div className="skeleton h-4 w-24 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
