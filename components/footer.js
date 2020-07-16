import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default (props) => {
  return (
    <div className="footer">
      <p className="smaller">Newton developed <a href="https://en.wikipedia.org/wiki/History_of_calculus" target="_blank">Calculus</a>, Shakespear wrote <a href="https://en.wikipedia.org/wiki/King_Lear" target="_blank">King Lear</a>.</p>
      <p className="smaller">I made a react powered bingoCard...</p>
      <div className="footer-links">
        <a href="https://github.com/brionwolf">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">brionwolf on github</span>
        </a>
      </div>
      <p className="smaller"><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">Stay Safe<span className="sr-only">: CDC: How to Protect Yourself & Others</span></a></p>
    </div>
  );
};
