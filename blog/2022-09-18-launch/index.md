---
slug: welcome
title: Welcome
authors: [manoj]
tags: [newsfetch, hello, news, ml, nlp]
---

# Announcing NewsFetch

NewsFetch is an open-source project that will strive to provide tools that enable harnessing News data.

It builds on top of years of experience the team at CloudCosmos has with datasets like News, and on the work that was behind
a few products that CloudCosmos had built in the general areas of ingesting and enriching large datasets. This history, for anyone
curious, is documented [here](https://newsfetch.tech/docs/newsfetch-history).

News is one of the widely consumed and researched dataset. NewsFetch builds on top of other phenomenal open source projects:

* [CommonCrawl - https://commoncrawl.org](https://commoncrawl.org)
  * More specifically [CommonCrawl News Dataset] (https://commoncrawl.org/2016/10/news-dataset-available/)
* [NewsPlease](https://github.com/fhamborg/news-please)
* [FastAPI](https://fastapi.tiangolo.com/)
* [Spacy](https://spacy.io/)
* [HuggingFace](https://huggingface.co/)
* Python
* Postgres / SQLite
* OpenSearch

... and many other libraries and pre-built machine learning models in NLP, NLP and text processing space.

# Project details

We started working on this project, basically taking out parts from the various CloudCosmos product efforts, and getting
them into the open-source project, over the September 2022 Labor Day (US long holiday weekend), and have been continuing
the work over the wekeends. We got to a stage after this weekend's effort, where an initial version could be published.

The project is hosted at [Github/NewsFetch](https://github.com/newsfetch/newsfetch)

## What is available?


* A standardized data model for processed news content
* A data processing pipeline to:
  * Fetching data from CommonCrawl, which is in WARC archive format
  * Extracting the article content from the WARC archive
  * Processing the article HTML to extract content to the standardized format
* Lots of documentation
* Dockerfile for the pipeline mentioned
* A sample API that shows what can be done with data

## What is coming?

* Text enrichments
  * Standardized flow that will apply enrichments using pre-build machine-learning models from Spacy/HuggingFace etc
  * Named entity recognition, Summarization, Topic detection etc
  * Reading difficult level metrics
  * Generative question answering
* Sample apps to showcase:
  * News analytics
  * Alerting
  * Podcast creation for "happening" news
  * Social media signal detection

## Any feature requests?

If you see something missing in the above, and would like for us to consider building it, please contact us.
