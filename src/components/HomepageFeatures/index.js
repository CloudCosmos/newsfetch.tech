import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'News Extraction',
    description: (
      <>
          News data from CommonCrawl, parsed and converted to a structured JSON format.
      </>
    ),
    link: '/docs/features/common-crawl-news-extraction',
  },
  {
    title: 'Extensive Documentation',
    description: (
      <>
          Blog posts, Sample code and working prototypes, Dockerfiles etc are available to get you started!
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: '100% free and open source',
    description: (
      <>
          Free to use however you want under the MIT License. Clone it, fork it, customize it...
      </>
    ),
    link: '/docs/license',
  },
  {
    title: 'Enrichments',
    description: (
      <>
          Generate enrichments from thousands of pre-built models. Sentiment analysis, topic modeling, and more!
      </>
    ),
    link: '/docs/features/enriched-news',
  },
  {
    title: 'RESTful News API',
    description: (
      <>
          Fully functional API with basic functionality to store and serve parsed News JSON, and any available enrichments.
      </>
    ),
    link: '/docs/features/api',
  },
  {
    title: 'Endless Possibilities',
    description: (
      <>
          Take data-driven actions on breaking news, detect trends, apply NLU and NLP, generate podcasts.
      </>
    ),
    link: '/docs/features/ideas-and-possibilities',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to="/">
          </Link>
        </div>
        <div className="card__body text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={link}>
              <Translate id="playground.tryItButton">Learn More!</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
