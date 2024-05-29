import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Docs</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
        <li>
          <Link href="/">
            <Button>Start Free Trial</Button>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-3">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developer</span>
          </>
        }
        description="The easiest way to build React landing page in seconds."
        button={
          <Link href="/">
            <Button xl>Start your 14-day Free Trial</Button>
          </Link>
        }
        image={{
          src: '/assets/images/hero-image.png',
          alt: 'Hero screenshot',
        }}
      />
    </Section>
  </Background>
);

export { Hero };
