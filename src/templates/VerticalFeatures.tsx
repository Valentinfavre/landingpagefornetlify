import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Un Livre Blanc pour s'assurer un suivi à toute épreuve pendant une Crise Informatique"
    description="Ne soyer plus mal organiser pour vos Crises Cyber et prenez en main votre département et collaborateurs pour vous remettre sur les rails le plus vite possible"
  >
    <VerticalFeatureRow
      title="Avant c'est trop chère, Après c'est trop tard ..."
      description="Formez vous avec ces 10 points retraçant la Gestion d'une Cyber-Crise a ses débuts jusqu'a sa clôture en réduisant au maximum l'arret de votre production."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Anticiper pour la prochaine fois !"
      description="Ce guide vous permettra également d'avoir toutes les clès en main pour vous protégez et d'anticiper beaucoup de prôblèmes si ce genre d'évènement est amenée a se reproduire"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Visez les sommets"
      description="Asurrez une SI saine pour votre entreprise et optimiser la reaction de vos équipes si une nouvelle Cyber-crise pointe le bout de son nez!"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
