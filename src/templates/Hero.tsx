import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'LES 10 ETAPES CLES POUR GERER \n'}
            <span className="text-primary-500">UNE CRISE CYBER</span>
            {'\n'}
            <span className="text-primary-500">UNE CRISE CYBER</span>
          </>
        }
        description="Apprenez rapidement à faire face aux pires situations"

        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Télécharger le Livre Blanc</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
