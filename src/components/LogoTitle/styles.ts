import styled from "styled-components";

export const SpanTitle = styled.span`
  font-size: 1.9rem;
  color: rgb(226, 232, 240);
  font-weight: 700;
  cursor: pointer;
  transition: all;
  transition-duration: 500ms;

  &:hover {
    color: #8485f6;
    transition-duration: 100ms;
    margin-top: -0.5rem;
    filter: drop-shadow(1px 1px 10px #8485f6);

  }

  @keyframes titleFade {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
