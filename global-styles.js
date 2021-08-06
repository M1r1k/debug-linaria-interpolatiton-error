import { css } from '@linaria/core';
import someStyles from './nestedStyles';
import theme from './theme';

export const globals = css`
  :global() {
    ${someStyles}
    font-size: ${theme.colors.UI.BLUE}
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
