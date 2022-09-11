---
layout: splash
permalink: /about
header:
  overlay_color: "#222222"
  overlay_image:
excerpt: About NewsFetch 

---

# Why NewsFetch?

CloudCosmos has been exploring News content for a while now! We have worked with clients in building large 
scale search engines for News, setting up data ingestion pipelines to rapidly cosume massive volumes of News 
for near-real-time needs of users, enriching News using various techniques and strategies (NLP, Machine Learning, 
rule engines etc).

NewsFetch provides a platform to explore News content in a structured and easy to use manner. It builds on the 
data that CommonCrawl has made available to the public, and in particular the CC-NEWS dataset. CC-NEWS crawls generate
about 10-15 archive files per day. Each archive has 20-25k documents (news articles) within it and these cover 
multiple languages. 

## RedactWiz

One of the first products that CloudCosmos built was RedactWiz (not in production anymore).
RedactWiz enabled AI power redaction to safeguard sensitive information from documents. It was a hosted 
app that enabled documents in MS Word, PDF and a few image formats to be uploaded, with configuration choices 
that further provided a capability for extracted textual content to be erased/redacted (blacked out in PDF 
and images; replaced with constant length character strings in text etc) based on identified entities (NER) and 
context around the entities (word span, sentences, paragraphs etc).

RedactWiz was designed to run in air-gapped environments. The product hosted all the AI/ML models and the code 
required for the features without needing to make any API calls to external vendor products or platforms.

## [Textalytics](https://www.textalytics.tech/)

An ask for the RedactWiz platform was capability to invoke the features via an API. Textalytics was built to 
address this ask and offers features beyond just the redaction use-case.

Textalytics offered features like Named Entity Recognition (NER), Entity Linking and Resolution (with WikiData), 
Summarization etc via a standardized APIs. These APIs also have the glue to make them work with cloud offerings 
with similar features. The focus with Textalytics was to showcase the capabilities that CloudCosmos team has with 
building and hosting custom models: all the way from obtaining content, cleaning, tagging for specific use-cases, 
training models for desired F1 scores and hosting it for inference.

The core capabilities of Textalytics was extended to apply to open-source and cloud based NLP engines and all of 
this was open-sourced as [Textalytics Open-Source](https://github.com/textalytics)

## [ShukraAI](https://www.shukra.ai/)

Shukra build upon Textalytics.

Shukra, was a large repository of enrichments for content in open datasets. The dataset being enriched was 
CC-NEWS (Common Crawl News).

Shukra’s goal was to provide an opinionated set of enrichments (NER, Summarization, Zero-Shot Classification, 
Sentiment Detection etc) from widely popular pre-trained models available from platforms like HuggingFace, Spacy, 
Allen AI, Flair etc for every document in CC-NEWS. These enrichments were generated for all the historic content, 
starting from about August 2016, when CC-NEWS started the News database, and keeping it as real-time as it was 
feasible and in-sync with the latest crawl dump from CC-NEWS.

Shukra aimed to extract enrichments from all of CC-NEWS contnet, and started with the languages for 
which pre-trained models were available. The estimated number of documents per day were over 50k documents, and 
there were be at least half a dozen to a dozen enrichments per document that were being generated.

# NewsFetch and the future

We are now open-sourcing the code that was the backbone of Shukra and to make it available for the community 
to use and build upon. This combined with Textalytics Open-Source shoudl enable one to build various applications 
that harness News for insights and data. 

# CloudCosmos

You can find the more information about CloudCosmos at [cloudcosmos-tech](https://cloudcosmos.tech/)


[cloudcosmos-tech]: https://cloudcosmos.tech
[newsfetch-github]: https://github.com/newsfetch