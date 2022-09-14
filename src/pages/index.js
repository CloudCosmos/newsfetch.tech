import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    var sample_data = {
        "url": "https://www.pbs.org/newshour/nation/weather-aids-firefighters-but-threat-from-western-wildfires-persists",
        "title": "Weather aids firefighters, but threat from Western wildfires persists",
        "authors": [
            "Associated Press"
        ],
        "content": "FORESTHILL, Calif. (AP) \u2014 Firefighters made progress against a huge Northern California wildfire that was still growing and threatening thousands of mountain homes, while crews also battled major blazes Sunday in Oregon and Washington.\nThe Mosquito Fire in foothills east of Sacramento spread to nearly 65 square miles (168 square kilometers), with 10% containment, according to the California Department of Forestry and Fire Protection, or Cal Fire.\n\u201cCooler temperatures and higher humidity assisted with moderating some fire activity,\u201d but higher winds allowed the flames to push to the north and northeast, according to a Cal Fire incident report Sunday.\nMore than 5,800 structures in Placer and El Dorado counties were under threat and some 11,000 residents of communities including Foresthill and Georgetown were under evacuation orders.\nIn Southern California, cooler temperatures and rain brought respite to firefighters battling the massive Fairview Fire about 75 miles (121 kilometers) southeast of Los Angeles after sweltering heat last week.\nWATCH: Historic, unrelenting heat wave grips the Western US\nThe 44-square-mile (114-square-kilometer) blaze was 45% contained Sunday. The fire has destroyed at least 30 homes and other structures in Riverside County. Two people died while fleeing flames last Monday.\nThe southern part of the state welcomed the cooler weekend weather as a tropical storm veered off the Pacific Coast and faded, helping put an end to blistering temperatures that nearly overwhelmed the state\u2019s electrical grid.\nThunderstorms and the risk of flooding persisted in mountainous areas of greater Los Angeles on Sunday. But after Hurricane Kay made landfall in Mexico last week it quickly was downgraded and weakened further until it largely disappeared, forecasters said.\nIn Washington state, a raging wildfire sparked Saturday in the remote Stevens Pass area sent hikers fleeing and forced evacuations of mountain communities. There was no containment Sunday of the Bolt Creek Fire, which had scorched nearly 12 square miles (31 square kilometers) of forestland east of Seattle.\n\u201cIt\u2019s going to be several days\u201d before crews get a handle on the blaze, Peter Mongillo, spokesperson for Snohomish Regional Fire and Rescue, told the Seattle Times.\nCalifornia\u2019s Mosquito Fire has covered a large portion of the Northern Sierra region with smoke. California health officials urged people in affected areas to stay indoors where possible. Organizers of the Tour de Tahoe canceled the annual 72-mile (115-km) bicycle ride scheduled Sunday around Lake Tahoe because of the heavy smoke from the blaze \u2014 more than 50 miles (80 km) away. Last year\u2019s ride was canceled because of smoke from another big fire south of Tahoe.\nThe Mosquito Fire\u2019s cause remained under investigation. Pacific Gas & Electric said unspecified \u201celectrical activity\u201d occurred close in time to the report of the fire on Tuesday.\nScientists say climate change has made the West warmer and drier over the last three decades and will continue to make weather more extreme and wildfires more frequent and destructive. In the last five years, California has experienced the largest and most destructive fires in state history.\nREAD MORE: California\u2019s \u2018climate migrants\u2019 and the difficulty of finding a new home\nAnd the rest of the West hasn\u2019t been immune. There were at least 18 large fires burning in Oregon and Washington, leading to evacuations and targeted power outages near Portland as the challenge of dry and windy conditions continued in the region.\nSprawling areas of western Oregon choked by thick smoke from the fires in recent days were expected to see improved air quality on Sunday thanks to a returning onshore flow, Oregon Public Broadcasting reported.\nSouth of Portland, more than 3,000 residents were under new evacuation orders because of the 134-square-mile (347-square-kilometer) Cedar Creek Fire, which has burned for over a month across Lane and Deschutes counties. Firefighters were protecting remote homes in Oakridge, Westfir and surrounding mountain communities.\nAccording to the Northwest Interagency Coordination Center, this weekend there were more than 400 square miles (1,035 square kilometers) of active, uncontained fires and nearly 5,000 people on the ground fighting them in the two northwestern states.",
        "excerpt": "Firefighters made progress against a huge Northern California wildfire that was still growing and threatening thousands of mountain homes, while crews also battled major blazes Sunday in Oregon and Washington.",
        "content_length": 4328,
        "published_date": "2022-09-20T00:00:00Z",
        "language": "en",
        "domain": "www.pbs.org",
        "media": "https://d3i6fh83elv35t.cloudfront.net/static/2022/09/2022-09-10T045514Z_664159068_RC22EW9YJJ3C_RTRMADP_3_CALIFORNIA-HEAT-MOSQUITO-FIRE-1-1024x614.jpg"
    }
    return (
        <header className={clsx('hero hero--white', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--5')}>
                        <div className="text--center padding-horiz--md">
                            <h1 className="hero__title">{siteConfig.title}</h1>
                            <p className="hero__subtitle">{siteConfig.tagline}</p>
                            <div className={styles.buttons}>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/docs/intro">
                                    NewsFetch Quick-Start : 30min ⏱️
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('col col--7')}>
                        <div className="text--left padding-horiz--md">
                            <pre className="text--primary" style={{fontSize: '12px'}}>{JSON.stringify(sample_data, null, 2) }</pre>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="News: Processed, Structured, and Ready to Use">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
