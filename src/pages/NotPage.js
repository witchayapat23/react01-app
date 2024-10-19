function NotPage() {
    return ( <>
                <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go Back Home
        </a>
      </div>
    </div>
    </> );
}

export default NotPage;