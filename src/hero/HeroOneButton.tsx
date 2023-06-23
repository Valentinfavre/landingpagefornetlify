import { ReactNode } from 'react';


type IHeroOneButtonProps = {
  button: ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>
    <img src={`./public/assets/LB_landing_page.jpg`} alt={props.imageAlt} />
    {props.button}
  </header>
);

export { HeroOneButton };
