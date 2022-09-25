---
sidebar_position: 56
---

# Enriched News

NewsFetch provides libraries that can enrich the News data. One or more enrichments can be applied on processed content 
from the article. The various enrichments that are available are:
* Named Entity Recognition
* Summarization (Abstractive at this time)
* Topic Modelling
* Question Answering
* Generative Question Answering
* Classification

## Named Entity Recognition

Named Entity Recognition (NER) is the process of identifying named entities in text and classifying them into pre-defined 
categories such as the names of persons, organizations, locations, expressions of times, quantities, monetary values, 
percentages, etc.

### Open Source Models

The NER processes wraps popular open-source NER libraries/models such as [spaCy](https://spacy.io/usage/linguistic-features#named-entities),
and [HuggingFace](https://huggingface.co/models?pipeline_tag=ner) to provide a standardized interface to the NER process. Support
is provided for AllenNLP and Flair as well.

The NER process generates a normalized output from the results that the open-source models provide. Further, there are utilities
that aggregate entities from results from single model, and from multiple models. Entity composition from BILOU tagging is also available.

### Cloud Provider Models

Various cloud providers provide NER models as a service. NewsFetch provides a wrapper for the AWS Comprehend NER service, 
Azure Text Analytics NER service, and Google Cloud Natural Language NER service. The output from these services is normalized
to the NewsFetch NER output format. These services are paid services, and the user is expected to have an account with the
cloud provider, and have the necessary credentials to access the service.

## Summarization

Summarization is the process of reducing a text document with a computer program in order to create a summary that retains 
the most important essence of the original document. A number of transformer based models that can generate a coherent 
summary of the input text, taking into account variables such as length, writing style and syntax. 

Summarization can be either extractive or abstractive. Extractive summarization identifies the most important sentences
in the text and reorders them to form the summary. Abstractive summarization generates new phrases and sentences to
form the summary.

NewsFetch provides a standardized interface to summarization models from [HuggingFace](https://huggingface.co/models?pipeline_tag=summarization).

## Topic Modelling

Topic modelling is the process of identifying topics in a text document. The topics are identified by the words that are
most relevant to the topic. 

NewsFetch provides a standardized interface to topic modelling models from [HuggingFace](https://huggingface.co/models?pipeline_tag=topic-modeling).

## Question Answering

Question Answering is the process of answering a question based on the context of the text. The context can be a paragraph,
or a document. The answer can be a sentence, or a span of text.

NewsFetch provides a standardized interface to question answering models from [HuggingFace](https://huggingface.co/models?pipeline_tag=question-answering).

## Generative Question Answering

Generative Question Answering is the process of generating a question based on the context of the text. The context can be a paragraph,
or a document. The question can be a sentence, or a span of text.

NewsFetch provides a standardized interface to generative question answering models from [HuggingFace](https://huggingface.co/models?pipeline_tag=question-generation).

## Classification

Classification is the process of assigning a label to a text document. The label can be a category, or a tag. The text
document can be a paragraph, or a document. Further the label can be a single label, or multiple labels.

NewsFetch provides a standardized interface to classification models from [HuggingFace](https://huggingface.co/models?pipeline_tag=text-classification).

# Enrichment Process



