---
sidebar_position: 01
---

# Introduction

## NewsFetch

:::tip News Data

Processed, Structured, and Ready to Use

:::

Billions of articles, tens of thousands of world-wide sources, multiple languages!!

## Source code

NewsFetch has been developed with Python. To get started, you will need to have Python 3.9 or higher installed on your system.
Python can be downloaded from [here](https://www.python.org/downloads/).

Pyenv is a tool that can be used to manage multiple versions of Python on the same system.
It can be installed using the following command:

```bash
curl https://pyenv.run | bash
```

Once installed you can install Python 3.9 using the following command:

```bash
pyenv install 3.9
```


### Project Structure

NewsFetch has various subprojects, and others are being implemented and will be added.
All subprojects will be based on Python and will follow the same structure. The general installation instructions for each subproject will be same.
Any specific instructions for a subproject will be mentioned in the respective subproject's documentation.

- [NewsFetch Core](https://github.com/NewsFetch/NewsFetch/tree/main/newsfetch-core) - Core library for NewsFetch
- [NewsFetch Common Crawl](https://github.com/NewsFetch/NewsFetch/tree/main/newsfetch-common-crawl) - Common Crawl related tools
- [NewsFetch Api](https://github.com/NewsFetch/NewsFetch/tree/main/newsfetch-api) - Example API based on FastAPI

### Installation

All NewsFetch subprojects use Poetry for managing dependencies.

To get started, first navigate to the submodule directory. Now create a virtual environment and activate it.

```bash
python -m venv venv
source venv/bin/activate
```

Then, install Poetry.

```bash
pip install poetry
```

Now, install the dependencies.

```bash
poetry install
```

### Usage

In cases where there is a `.env.sample` file, make a copy of it to a file named `.env` add/updated the required values.
These values will be used in configuration, and is loaded from the `.env` file in corresponding `config.py` file.




