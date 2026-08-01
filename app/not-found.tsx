import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-xs tracking-[0.3em] text-purple-500 uppercase mb-4">
        404
      </p>
      <h1 className="font-serif-display text-3xl sm:text-4xl text-purple-800 mb-4">
        Page Not Found
      </h1>
      <p className="text-ink/60 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-purple-700 text-white text-xs tracking-widest uppercase hover:bg-purple-800 transition-colors"
      >
        Back To Home
      </Link>
    </div>
  );
}
