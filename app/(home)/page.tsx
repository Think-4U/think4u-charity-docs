import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-6 py-24">
      <p className="text-sm font-medium tracking-widest uppercase text-fd-muted-foreground mb-6">Think4U · Public documentation</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">Think. Empower. Uplift.</h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground mb-10">Find practical guides to donating, volunteering, joining community programs, and getting support from Think4U Charity Organization.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/docs" className="rounded-lg bg-brand-gold text-brand-dark hover:bg-brand-gold-hover px-6 py-3 font-medium">Explore the docs →</Link>
        <a href="https://think4u.org" className="rounded-lg border px-6 py-3 font-medium hover:bg-fd-accent">Visit Think4u</a>
      </div>
      <p className="mt-8 max-w-xl text-sm leading-relaxed text-fd-muted-foreground">Domestic donations only. FCRA application pending. Section 80G approval is under process; do not assume a current tax deduction. <Link href="/docs/donations/eligibility-and-tax" className="underline">Read the donation notices.</Link></p>
    </div>
  );
}
