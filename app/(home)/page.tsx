import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-6 py-24">
      <p className="text-sm font-medium tracking-widest uppercase text-fd-muted-foreground mb-6">Think4u · Documentation</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">A place to find your answers.</h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground mb-10">Explore the documentation, get started, and learn how to contribute to the Think4u knowledge base.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium">Explore the docs →</Link>
        <a href="https://think4u.org" className="rounded-lg border px-6 py-3 font-medium hover:bg-fd-accent">Visit Think4u</a>
      </div>
    </div>
  );
}
