import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TeamSection from '@/components/TeamSection'
import { getServices, getCaseStudies, getTestimonials, getTeamMembers } from '@/lib/cosmic'

export default async function Home() {
  const [services, caseStudies, testimonials, teamMembers] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
    getTeamMembers()
  ])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <TeamSection teamMembers={teamMembers} />
    </div>
  )
}