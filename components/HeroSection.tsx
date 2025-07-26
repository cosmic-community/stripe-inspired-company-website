export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            The infrastructure to{' '}
            <span className="gradient-text">scale your business</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Millions of companies rely on our platform to accept payments, 
            send money, and manage their business online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
              Start building
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
              Contact sales
            </button>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">99.99%</div>
                  <div className="text-gray-600">Uptime guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">190+</div>
                  <div className="text-gray-600">Countries supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$1B+</div>
                  <div className="text-gray-600">Processed annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}