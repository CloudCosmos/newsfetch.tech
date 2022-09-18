# Common Crawl News Extraction

## About Common Crawl

CommonCrawl is a non-profit organization that provides a free and open repository of web crawl data.
It is a great source of data for NewsFetch.

Let us go over the process of using NewsFetch to extract News data from CommonCrawl.
The extracted data is further processed with NewsPlease.

## Common Crawl News Dataset

CommonCrawl News data is available in an AWS S3 bucket. The details are [here](https://commoncrawl.org/2016/10/news-dataset-available/).

The data is available as a compressed WARC file. WARC is a file format for storing web crawl data.

NewsFetch provides command line scripts to extract News data from CommonCrawl.
The script is available in the [newsfetch-common-crawl](https://github.com/NewsFetch/NewsFetch/tree/main/newsfetch-common-crawl) subproject.

# Docker images

To use Docker images refer to the [Docker](docker.md) page.

# Using NewsFetch scripts natively

## Installation

Navigate to the subproject root directory and follow the installation instructions from the [Quick Start Guide](../intro.md).

## Fetching latest WARC file from CommonCrawl S3 bucket

The `get_latest_warc.sh` (https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/get_latest_warc.sh) script is used to fetch the latest WARC file from CommonCrawl S3 bucket.

The configuration for the destination directory where the WARC file will be downloaded can be specified
with the `COMMON_CRAWL_DATA_DIR` environment variable. The default value is `./commoncrawl-data`

```.env
COMMON_CRAWL_DATA_DIR="./commoncrawl-data"
```

This script will download the latest WARC file to the `COMMON_CRAWL_DATA_DIR` directory.

The file name will be in the following format:

```
CC-NEWS-<YYYYMMDDHHMMSS>-<RANDOM>.warc.gz
```

The file is approximately 1GB in size.

At the end of the script, the WARC file name and the destination path will be printed to the console.

```json
{
  "warc_file_name": "CC-NEWS-20210911100000-00010.warc.gz",
  "destination_file": "./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz",
  "took": 200
}
```

The structure of the directory will be along the lines of:

```terminal
├── commoncrawl-data
|  ├── CC-NEWS-20210911100000-00010.warc.gz
```

## Extracting content from WARC file

The `extract_warc.sh` (https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/extract_warc.sh) script is used to extract content from the WARC file.

A command line argument, pointing to the WARC file to be processed, needs to be specified as well.
Remember that the output of the first script has the path to the destination file. The value from the `destination_file` field can be used here.

```
--warc-file-path <path to WARC file>
```

Example invocation:

```terminal
./extract_warc.sh --warc-file-path ./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz
```

The configuration for the destination folder where the processed articles from the WARC file will be stored can be
changed by providing the `WARC_EXTRACT_DIR` environment variable. The default value for this variable is `warc-extract`.

```.env
WARC_EXTRACT_DIR = "warc-extract"
```

The script will first uncompress the WARC file, and then create a subdirectory with the name of the WARC file (without extension). Within this subdirectory, it will create another subdirectory using the name provided in `WARC_EXTRACT_DIR` variable.
Now, as it processed the WARC file, it will create a subdirectory within `WARC_EXTRACT_DIR` for each unique web domain that is present in the archive.
Within this domain subdirectory, each article in the WARC is processed, and the processed contents are stored as JSON with the article's unique UUID as the file name (with `.json` extension)

A sample article, in the file `warc-extract/9c496b40-4344-4714-b50d-02a38b4f8028.json`, is shown below. The HTML content of the article is not shown for brevity.
```json
{
  "dataset_id": "9c496b40-4344-4714-b50d-02a38b4f8028",
  "dataset": "news-cc",
  "dataset_content_length": "154384",
  "uri": "https://www.pbs.org/newshour/nation/weather-aids-firefighters-but-threat-from-western-wildfires-persists",
  "warc_sourced_date": "2022-09-11T23:19:04Z",
  "warc_extracted_date": "2022-09-11T22:27:52Z",
  "domain": "www.pbs.org",
  "article_html": "[HTML content of the article]"
}
```

The structure of the directory will be along the following lines now:

```terminal
├── commoncrawl-data
|  ├── CC-NEWS-20210911100000-00010.warc.gz
|  ├── CC-NEWS-20210911100000-00010
|  |  ├── warc-extract
|  |  |  ├── www.pbs.org
|  |  |  |  |── 9c496b40-4344-4714-b50d-02a38b4f8028.json
|  |  |  |  |── a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json
|  |  |  ├── www.1news.co.nz
|  |  |  |  |── 01e5e008-3a39-43a0-a458-daa500782f97.json
```

## Processing extracted article with NewsPlease

The `process_extracted_warc_files.sh` (https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/process_extracted_warc_files.sh) script is used to process the articles with NewsPlease.

A command line argument, pointing to the WARC file to be processed, needs to be specified as well:

```
--warc-file-path <path to WARC file>
```

Example invocation:

```terminal
./process_extracted_warc_files.sh --warc-file-path ./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz
```

The configuration for the destination folder where the processed articles from the WARC file will be stored can be
changed by providing the `PROCESSED_CONTENT_DIR` environment variable. The default value for this variable is `processed-content`.

```.env
PROCESSED_CONTENT_DIR = "processed-content"
```
The script runs through each extracted article in `warc-extract` directory, and processes it with NewsPlease. The processed output is stored in
a similar directory structure as the `warc-extract` directory, but in a subdirectory created with the name supplied in the
environment variable `PROCESSED_CONTENT_DIR`.

A sample processed article, in the file `processed-content/9c496b40-4344-4714-b50d-02a38b4f8028.json`, is shown below.
```json
{
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
  "media": "https://d3i6fh83elv35t.cloudfront.net/static/2022/09/2022-09-10T045514Z_664159068_RC22EW9YJJ3C_RTRMADP_3_CALIFORNIA-HEAT-MOSQUITO-FIRE-1-1024x614.jpg",
  "meta_info": {
    "dataset_id": "9c496b40-4344-4714-b50d-02a38b4f8028",
    "dataset": "news-cc",
    "dataset_content_length": "154384",
    "warc_sourced_date": "2022-09-11T23:19:04Z",
    "warc_extracted_date": "2022-09-11T22:27:52Z",
    "warc_processed_date": "2022-09-11T23:26:31Z"
  }
}
```

The structure of the directory will be along the following lines now:

```terminal
├── commoncrawl-data
|  ├── CC-NEWS-20210911100000-00010.warc.gz
|  ├── CC-NEWS-20210911100000-00010
|  |  ├── warc-extract
|  |  |  ├── www.pbs.org
|  |  |  |  |── 9c496b40-4344-4714-b50d-02a38b4f8028.json
|  |  |  |  |── a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json
|  |  |  ├── www.1news.co.nz
|  |  |  |  |── 01e5e008-3a39-43a0-a458-daa500782f97.json
|  |  ├── processed-content
|  |  |  ├── www.pbs.org
|  |  |  |  |── 9c496b40-4344-4714-b50d-02a38b4f8028.json
|  |  |  |  |── a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json
|  |  |  ├── www.1news.co.nz
|  |  |  |  |── 01e5e008-3a39-43a0-a458-daa500782f97.json
```

At this point all the articles in the downloaded WARC file would have been processed.

This data can now be used to build a search engine, or a news aggregator, or any other application that requires News data.
