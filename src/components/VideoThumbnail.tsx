import styled from "styled-components";

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${(props) => props.selected && `background: #f3c1b8; color: white;`}

  h4 {
    font-size: 1.4rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    h4 {
      padding-left: 1rem;
    }
  }
`;

interface Props {
  src: string;
  name: string;
  onClick: () => void;
  selected: boolean;
}

export default function VideoThumbnail({
  src,
  name,
  onClick,
  selected,
}: Props) {
  return (
    <Wrapper onClick={onClick} selected={selected}>
      <img alt="name" src={src} />
      <h4>{name}</h4>
    </Wrapper>
  );
}
