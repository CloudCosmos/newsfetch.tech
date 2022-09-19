---
sidebar_position: 54
---

# Sample Data

Sample data is available in the repository. It is located in the folder `sample-data` under the root directory of the repository.

The sample data is provided in multiple languages and in the format that is the first stage of the extraction process, and then in the format that is the processed data.

The sample data is in the format that is expected by the API. The API is based on FastAPI and uses SQLAlchemy. The data model can be found in the file `newsfetch-api/core/db_models.py`. The wire format of the data is defined in the file `newsfetch-core/api_schemas.py`.
This data can be used in the API to populate the database. It is our hope that this will serve as a starting point for the other experiments that can be built with NewsFetch.
