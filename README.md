# lifeway-api

To build the API:
```sh
> cd lifeway-api
> . venv/bin/activate    # activate virtual environment to set up the required libraries
> python main.py         # serve the application, running on http://127.0.0.1:5000/
```
To run the API:
```sh
# endpoint: http://127.0.0.1:5000/count/message
# note: id and message are mutable

> curl -X GET "http://127.0.0.1:5000/count/message" \
-H "Content-type: application/json" \
-H "Accept: application/json" \
-d '{"id": 1, "message": "Hello World"}'
```
