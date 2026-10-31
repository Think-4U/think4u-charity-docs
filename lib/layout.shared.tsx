import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, githubUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: { enabled: false },
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl,
    links: [
      { text: 'Donate', url: 'https://think4u.org/donate', external: true },
      { text: 'Volunteer', url: 'https://think4u.org/volunteer', external: true },
      { text: 'think4u.org', url: 'https://think4u.org', external: true },
    ],
  };
}
