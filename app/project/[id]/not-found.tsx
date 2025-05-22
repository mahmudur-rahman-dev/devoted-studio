import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-2xl font-medium">Project not found</h1>
      <p className="mb-4 text-text">Could not find the requested project.</p>
      <Link 
        href="/portfolio" 
        className="text-primary hover:underline"
      >
        Back to Portfolio
      </Link>
    </div>
  )
} 