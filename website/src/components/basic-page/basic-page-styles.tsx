import { css } from "styled-components";

import { IsMobile, IsTablet } from "@/shared-style";

export const BasicPageStickySideBarStyle = `
  max-height: 90vh;
  display: block;
  align-self: start;
  position: sticky;
  top: 0;
  overflow-y: auto;
  z-index: 25;

  ${IsTablet(css`
    max-height: none;
    width: 350px;
  `)}

  ${IsMobile(css`
    width: 100%;
  `)}
`;
