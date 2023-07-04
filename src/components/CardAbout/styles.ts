import styled from "styled-components";

export const ContainerAbout = styled.section`
  padding-top: 3.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
`;

export const ContentAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e25;
  border-radius: 1rem;
  padding: 2.4rem;
  margin-top: 8rem;
  margin-bottom: 4rem;

  .aboutImg {
    display: flex;
    justify-self: center;
    align-self: center;
    margin-bottom: 2rem;

    img {
      width: 18rem;
    }

    @media (min-width: 995px) {
      img {
        width: 40rem;
      }
    }
  }

  .aboutContent {
    padding: 0 2rem;
    text-align: start;
    max-width: 45rem;

    h2 {
      color: #7b73e5;
      font-size: 2.3rem;
    }

    p {
      color: rgb(214, 214, 220);
      font-size: 1.4rem;
    }

    @media (min-width: 994px) {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .aboutContent {
      width: 70rem;
      margin-bottom: 1rem;
      font-weight: 500;
      align-items: center;
    }
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .aboutBtns {
    display: flex;
    padding-top: 2.2rem;
    justify-content: start;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 468px) {
      flex-direction: column;
    }
  }
`;

export const Button = styled.div`
  background: rgb(82, 82, 224);
  color: rgb(239, 240, 247);
  cursor: pointer;
  font-size: 1.92rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 1.6rem 1.9rem;
  border: none;
  border-radius: 0.8rem;
  gap: 0.4rem;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background: rgb(82, 82, 280);
  }
`;

export const ButtonAlternatives = styled.button`
  border: none;
  background: transparent;
  color: rgb(177, 188, 220);
  cursor: pointer;
  font-size: 1.92rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: Arial, Helvetica, sans-serif;

  border-bottom-width: 0;
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#7b73e5, #7b73e5);

  &:hover {
    color: #7b73e5;
    background-size: 100% 3px;
    background-position: 0 100%;
  }
`;