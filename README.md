# lifeway-api

## Setup

The technology used is:

 * Nodejs

```sh
> cd lifeway-api
> npm install	  # install required packages
> npm start       # start the application, running on http://127.0.0.1:3000/
```

## Run the API

```sh
# endpoint: http://127.0.0.1:3000/api/v0/count/message
# note: id and message are mutable

> curl -X GET "http://127.0.0.1:3000/api/v0/count/message" \
-H "Content-type: application/json" \
-H "Accept: application/json" \
-d '{"id": 1, "message": "Hello World"}'
```
