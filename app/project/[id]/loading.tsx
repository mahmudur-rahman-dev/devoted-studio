export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="animate-pulse">
        <div className="mb-6 h-8 w-1/2 bg-gray-200 rounded"></div>
        <div className="mb-4 h-4 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
} 