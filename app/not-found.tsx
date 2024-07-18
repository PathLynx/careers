// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Job Not Found</h1>
      <p className="mb-4">Sorry, the job you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to job listings
      </Link>
    </div>
  )
}
