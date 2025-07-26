import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const caseStudyTitle = caseStudy.metadata?.case_study_title || caseStudy.title
  const clientName = caseStudy.metadata?.client_name || ''
  const clientLogo = caseStudy.metadata?.client_logo
  const industry = caseStudy.metadata?.industry?.value || ''
  const challenge = caseStudy.metadata?.challenge || ''
  const results = caseStudy.metadata?.results || ''
  const keyMetrics = caseStudy.metadata?.key_metrics || {}
  const featuredImage = caseStudy.metadata?.featured_image
  const servicesUsed = caseStudy.metadata?.services_used || []

  // Extract first few key metrics for display
  const displayMetrics = Object.entries(keyMetrics).slice(0, 3)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden card-hover">
      {featuredImage && (
        <div className="relative h-48 bg-gray-100">
          <img 
            src={`${featuredImage.imgix_url}?w=600&h=240&fit=crop&auto=format,compress`}
            alt={caseStudyTitle}
            className="w-full h-full object-cover"
            width={300}
            height={120}
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center mb-4">
          {clientLogo && (
            <img 
              src={`${clientLogo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
              alt={clientName}
              className="w-12 h-12 rounded-lg mr-4"
              width={48}
              height={48}
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{clientName}</h3>
            {industry && (
              <span className="text-sm text-gray-600">{industry}</span>
            )}
          </div>
        </div>
        
        <h4 className="text-lg font-medium text-gray-900 mb-4">{caseStudyTitle}</h4>
        
        {challenge && (
          <div className="mb-4">
            <div 
              className="text-gray-600 text-sm line-clamp-3"
              dangerouslySetInnerHTML={{ __html: challenge.substring(0, 150) + '...' }}
            />
          </div>
        )}
        
        {displayMetrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            {displayMetrics.map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary">{String(value)}</div>
                <div className="text-xs text-gray-600 capitalize">
                  {key.replace(/_/g, ' ')}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {servicesUsed.length > 0 && (
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-2">Services used:</div>
            <div className="flex flex-wrap gap-2">
              {servicesUsed.slice(0, 2).map((service) => (
                <span 
                  key={service.id}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                >
                  {service.metadata?.service_name || service.title}
                </span>
              ))}
              {servicesUsed.length > 2 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  +{servicesUsed.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
          Read full case study
        </button>
      </div>
    </div>
  )
}