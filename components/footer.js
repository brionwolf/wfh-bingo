import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer(props) {
  return (
    <footer>
      <p className="smaller">Newton developed <a href="https://en.wikipedia.org/wiki/History_of_calculus" target="_blank">Calculus</a>, Shakespeare wrote <a href="https://en.wikipedia.org/wiki/King_Lear" target="_blank">King&nbsp;Lear</a>.</p>
      <p className="smaller">I made a react powered bingoCard generator, all inspired by our new work/life of video conferencing.</p>
      <p className="smaller"><em>It&rsquo;s a work in progress</em></p>
      <div className="footer-links">
        <a className="smaller" href="https://github.com/brionwolf/wfh-bingo/issues" target="_blank">Submit an Issue<span className="sr-only"> to the project&rsquo;s github</span></a>
        <a className="smaller" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">Stay Safe<span className="sr-only">: CDC: How to Protect Yourself & Others</span></a>
        <a href="https://github.com/brionwolf/" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Max on github</span>
        </a>
        <a href="https://twitter.com/max_escher/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Max on twitter</span>
        </a>
      </div>
    </footer>
  );
};
