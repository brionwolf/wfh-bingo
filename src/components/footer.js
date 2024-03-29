import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
  return (
    <footer>
      <layout-lock>
        <p className="smaller">
          Newton developed{' '}
          <a
            href="https://en.wikipedia.org/wiki/History_of_calculus"
            target="_blank"
          >
            Calculus
          </a>
          , Shakespeare wrote{' '}
          <a href="https://en.wikipedia.org/wiki/King_Lear" target="_blank">
            King&nbsp;Lear
          </a>
          .
        </p>
        <p className="smaller">
          I made a react powered bingoCard generator, inspired by our new video
          conference based way of work/life.
        </p>
        <div className="footer-links">
          <a
            className="smaller"
            href="https://github.com/brionwolf/wfh-bingo/issues/new"
            target="_blank"
          >
            Submit an Issue
            <span className="sr-only"> to the project&rsquo;s github</span>
          </a>
          <a
            className="smaller"
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            target="_blank"
          >
            Stay Safe
            <span className="sr-only">
              : CDC: How to Protect Yourself & Others
            </span>
          </a>
          <a href="https://github.com/brionwolf/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Max on github</span>
          </a>
          <a href="https://twitter.com/max_escher/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Max on twitter</span>
          </a>
          <span className="smaller">&copy; 2020</span>
        </div>
      </layout-lock>
    </footer>
  );
}
