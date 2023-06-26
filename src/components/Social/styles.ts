import styled from "styled-components";

export const ContainerSocials = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  position: absolute;
  top: 42rem;
  left: 10rem;

  > a:first-child::after {
    content: "Baixar Currículo";
  }

  > a:nth-child(2)::after {
    content: "Meu Github";
  }

  > a:last-child::after {
    content: "Meu Linkedin";
  }
`;

export const IconSocial = styled.a`
  transition: all 0.3s ease 0s;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    position: absolute;
    width: 8rem;
    font-size: 1rem;
    background-color: #09090b;
    color: rgb(255, 255, 255);
    padding: 0.3rem;
    text-align: center;
    z-index: 15;
    border-radius: 0.3rem;
    bottom: -1.8rem;
    right: 0rem;
    transform: translateX(20px);
    opacity: 0;
    transition: all 0.2s ease 0s;
    display: none;
  }

  &:hover::after {
    opacity: 1;
    display: block;
  }

  > img {
    height: 4rem;
    opacity: 0.25;
    transition: all 0.3ms;
  }

  &:hover > img {
    opacity: 1;
    transform: scale(1.2);
  }
`;
