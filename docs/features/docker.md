# Docker images

To enable easy deployment of NewsFetch, we have created Docker images for the various components of NewsFetch.

## NewsFetch Common Crawl

The NewsFetch Common Crawl image is available on Docker Hub at [newsfetch/newsfetch-common-crawl](https://hub.docker.com/r/newsfetch/newsfetch-common-crawl).

### Usage

To use the NewsFetch Common Crawl image, you will need to have Docker installed on your system. Docker can be downloaded from [here](https://www.docker.com/products/docker-desktop).

### Fetch the latest Common Crawl data

It is assumed that there is a directory named `commoncrawl-data` in the current directory.
This directoy will be used to store the CommonCrawl data.

First use the docker image to download the latest CommonCrawl data.

```bash
docker run -e COMMON_CRAWL_DATA_DIR=/data -v $(pwd)/commoncrawl-data:/data -it --name newsfetch-download-warc newsfetch/newsfetch-common-crawl sh ./get_latest_warc.sh
```

This will download the latest WARC file to the `commoncrawl-data` directory.

Make a note of the name of the WARC file that was downloaded.
Let us say the name was `CC-NEWS-20220915230049-00936.warc.gz`.

### Extract the data from the WARC file

Now use the image to extract the news articles from the WARC file.

Be sure to map the volumes correctly.

In the following example, The `commoncrawl-data` directory is mapped to `/data` in the container.
The WARC file name is provided in reference to this volume name.
It will be `/data/CC-NEWS-20220915230049-00936.warc.gz`

```bash
docker run -e COMMON_CRAWL_DATA_DIR=/data -v $(pwd)/commoncrawl-data:/data -it --name newsfetch-extract-warc newsfetch/newsfetch-common-crawl sh ./extract_warc.sh /data/CC-NEWS-20220915230049-00936.warc.gz
```

### Process extracted data with NewsFetch

Finally, process the extracted news articles.

```bash
docker run -e COMMON_CRAWL_DATA_DIR=/data -v $(pwd)/commoncrawl-data:/data -it --name newsfetch-process-warc newsfetch/newsfetch-common-crawl sh ./process_extracted_warc_files.sh /data/CC-NEWS-20220915230049-00936.warc.gz
```