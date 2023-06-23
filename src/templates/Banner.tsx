import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Envie de lire notre Livre Blanc ?"
      subtitle="Inscrivez vous à notre newsletter et télèchargez-le"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Télècharger</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
