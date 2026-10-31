import Link from 'next/link';
import { organization, policyLinks, publicLinks, socialLinks } from '@/lib/public-info';

export function PublicFooter() {
  return (
    <footer className="brand-panel border-t px-6 py-12 text-sm">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-2 text-lg font-semibold">{organization.name}</p>
            <p className="leading-relaxed text-fd-muted-foreground">{organization.mission}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://think4u.org/donate" className="rounded-lg bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground">Donate ❤️</a>
            <a href="https://think4u.org/volunteer" className="rounded-lg border px-4 py-2 font-medium hover:bg-fd-accent">Volunteer</a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Think4U quick links">
            <h2 className="mb-4 font-semibold">Quick links</h2>
            <ul className="space-y-2 text-fd-muted-foreground">
              {publicLinks.map(([label, href]) => <li key={href}><a href={href} className="hover:text-fd-foreground hover:underline">{label}</a></li>)}
            </ul>
          </nav>
          <nav aria-label="Legal and compliance">
            <h2 className="mb-4 font-semibold">Legal & compliance</h2>
            <ul className="space-y-2 text-fd-muted-foreground">
              {policyLinks.map(([label, href]) => <li key={href}><a href={href} className="hover:text-fd-foreground hover:underline">{label}</a></li>)}
              <li><Link href="/docs/policies/privacy-and-consent" className="hover:text-fd-foreground hover:underline">Consent settings guidance</Link></li>
            </ul>
          </nav>
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="mb-4 font-semibold">Contact & office</h2>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li><a href={`mailto:${organization.email}`} className="hover:underline">{organization.email}</a></li>
              <li><a href={`mailto:${organization.leadershipEmail}`} className="hover:underline">{organization.leadershipEmail}</a></li>
              <li><a href={organization.phoneHref} className="hover:underline">{organization.phone}</a></li>
              <li><address className="not-italic leading-relaxed">{organization.address}</address></li>
              <li><a href="https://think4u.org/contact" className="hover:underline">Contact support form</a></li>
            </ul>
          </section>
          <nav aria-label="Follow Think4U">
            <h2 className="mb-4 font-semibold">Follow us</h2>
            <ul className="space-y-3 text-fd-muted-foreground">
              {socialLinks.map(([label, href]) => <li key={href}><a href={href} className="hover:text-fd-foreground hover:underline">{label}</a></li>)}
              <li><Link href="/docs/participate/volunteer" className="hover:underline">Volunteer WhatsApp group guidance</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 space-y-3 border-t pt-6 leading-relaxed text-fd-muted-foreground">
          <p><strong className="text-fd-foreground">Domestic donations only.</strong> International or foreign contributions are currently not accepted. FCRA application submitted and pending. Check the <a href="https://think4u.org/fcra-notice" className="underline">current India-only / FCRA notice</a> before donating.</p>
          <p><strong className="text-fd-foreground">Section 80G status: under process.</strong> Do not assume current donations qualify for an 80G deduction until statutory approval is effective. See the <a href="https://think4u.org/tax-notice" className="underline">current tax notice</a>.</p>
          <p>Public information reviewed {organization.reviewedOn}. These guides explain the public website; the linked official policies contain the full terms and current notices.</p>
          <p>© {new Date().getUTCFullYear()} {organization.name}. All rights reserved. · Registered Charitable Trust</p>
        </div>
      </div>
    </footer>
  );
}
