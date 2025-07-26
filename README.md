# Stripe-Inspired Company Website

![App Preview](https://imgix.cosmicjs.com/97f67080-69b6-11f0-a051-23c10f41277a-photo-1460925895917-afdab827c52f-1753489340111.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js that showcases your services, team members, case studies, and testimonials. Designed with Stripe's clean, minimalist aesthetic featuring bold typography, strategic gradients, and excellent information hierarchy.

## Features

- 🏢 **Service Showcase** - Display your services with descriptions, features, and pricing
- 📊 **Case Studies** - Detailed success stories with client information and key metrics
- 👥 **Team Profiles** - Professional team member showcase with bios and social links
- 💬 **Customer Testimonials** - Social proof with ratings and company logos
- 📱 **Responsive Design** - Mobile-first approach with seamless desktop scaling
- ⚡ **Performance Optimized** - Fast loading with image optimization and efficient data fetching
- 🎨 **Stripe-Inspired Design** - Clean layouts, subtle gradients, and professional typography

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68841f224d78b48606e72547&clone_repository=68843d09a8c29000766bb2ec)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies. Make it styled like stripe.com"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config. Make it styled like stripe.com"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Content management integration
- **Inter Font** - Professional typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Cosmic SDK Examples

### Fetching Services
```typescript
const { objects: services } = await cosmic.objects
  .find({
    type: 'services',
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({
    type: 'case-studies',
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related services data
```

### Fetching Team Members by Department
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({
    type: 'team-members',
    'metadata.department': 'engineering'
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This website is fully integrated with Cosmic CMS and uses the following content types:

- **Services** - Your service offerings with descriptions, features, and pricing
- **Team Members** - Team profiles with photos, bios, and department information
- **Case Studies** - Client success stories with challenges, solutions, and results
- **Testimonials** - Customer reviews with ratings and company information

All content is dynamically fetched from your Cosmic bucket using the staging API environment, ensuring you can test changes before going live.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in your Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js applications.
<!-- README_END -->