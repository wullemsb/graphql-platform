import React, { FC } from "react";
import styled from "styled-components";

// Icons
import TimesIconSvg from "@/images/times.svg";

export interface DocPagePaneHeaderProps {
  readonly showWhenScreenWidthIsSmallerThan: number;
  readonly title: string;
  readonly onClose: () => void;
}

export const DocPagePaneHeader: FC<DocPagePaneHeaderProps> = ({
  showWhenScreenWidthIsSmallerThan,
  title,
  onClose,
}) => (
  <Header showWhenScreenWidthIsSmallerThan={showWhenScreenWidthIsSmallerThan}>
    <Title>{title}</Title>
    <CloseButton onClick={onClose} />
  </Header>
);

const Header = styled.header<{
  readonly showWhenScreenWidthIsSmallerThan: number;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;

  @media only screen and (min-width: ${({ showWhenScreenWidthIsSmallerThan }) =>
      showWhenScreenWidthIsSmallerThan}px) {
    display: none;
  }
`;

const Title = styled.h5`
  flex: 1 1 auto;
  margin-bottom: 0;
  margin-left: 25px;
`;

const CloseButton = styled(TimesIconSvg)`
  flex: 0 0 auto;
  margin-right: 19px;
  margin-left: 20px;
  width: 26px;
  height: 26px;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  fill: #000;

  &:hover {
    opacity: 1;
  }
`;
