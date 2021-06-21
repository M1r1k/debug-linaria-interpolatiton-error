import { css } from 'linaria';
import staticVariables from './staticVariables';

export const globals = css`
  :global() {
    html {
      font-size: 20px;
      color: ${staticVariables.redColor};
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
