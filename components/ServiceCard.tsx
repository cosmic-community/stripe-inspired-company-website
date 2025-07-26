import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceName = service.metadata?.service_name || service.title
  const shortDescription = service.metadata?.short_description || ''
  const serviceIcon = service.metadata?.service_icon
  const keyFeatures = service.metadata?.key_features || []
  const startingPrice = service.metadata?.starting_price || ''
  const serviceStatus = service.metadata?.service_status?.value || 'Active'

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 card-hover">
      <div className="flex items-center mb-6">
        {serviceIcon && (
          <img 
            src={`${serviceIcon.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
            alt={serviceName}
            className="w-12 h-12 rounded-lg mr-4"
            width={48}
            height={48}
          />
        )}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{serviceName}</h3>
          {serviceStatus !== 'Active' && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mt-1">
              {serviceStatus}
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{shortDescription}</p>
      
      {keyFeatures.length > 0 && (
        <ul className="space-y-2 mb-6">
          {keyFeatures.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {startingPrice && (
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">{startingPrice}</span>
          <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
            Learn more
          </button>
        </div>
      )}
    </div>
  )
}