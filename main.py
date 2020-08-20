from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

table = set()    # HashSet table to check duplicated id
total_word = 0   # global variable to increment total number of words

class count_message(Resource):
    def get(self):
        global total_word   # need to declare global variable
        data = request.json # store json request

        # check if json request is empty or missing any required keys (id and message)
        if data is None or not all(key in data.keys() for key in ['id', 'message']):
            return {'message': 'Invalid Request Data'}

        # HashSet table does not allow duplicate elements
        # This function returns True if there is no duplication or False if there is duplication
        if (not(data['id'] in table or table.add(data['id']))):
            total_word += len(data['message'].split())
            return {'count': total_word}

        # return duplication error message if id is processed multiple times
        return {'message': 'Duplicated ID'}

# API endpoint
api.add_resource(count_message, '/count/message')

if __name__ == '__main__':
    app.run(debug=False)
