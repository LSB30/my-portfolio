import Social from "../Social";
import {
  ButtonPrimary,
  ContainerMobile,
  ContainerTitle,
  IntroTextH1,
  IntroTextH2,
  IntroTextP,
} from "./styles";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi'



export default function Title() {
  return (
    <>
      <ContainerMobile>
        <ContainerTitle>
          <IntroTextP>Olá,👋🏻 o meu nome é</IntroTextP>
          <IntroTextH1>Lucas Santana</IntroTextH1>
          <IntroTextH2>
            <Typewriter
              options={{
                strings: ["Front-end Developer", "React Specialist", "Next Specialist"],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </IntroTextH2>
          <Social/>

          <div className="button">
              <ButtonPrimary>
                <Link to="/projetos">
                  <span>
                    <b>Conheça meu portfólio</b>
                    <FiArrowRight style={{ marginBottom: '-0.48rem' }} size={20} />
                  </span>
                </Link>
              </ButtonPrimary>
          </div>
        </ContainerTitle>
      </ContainerMobile>
    </>
  );
}
