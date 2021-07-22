/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import Wrapper, { A } from "./Wrapper";

import { FormattedMessage } from 'react-intl'

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage id="app.components.LeftMenuFooter.poweredBy" defaultMessage="Maintained by" key="poweredBy" />
        &nbsp;
        <A
          href="https://github.com/ianlibanio"
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ian Libânio
        </A>
        &nbsp;
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
