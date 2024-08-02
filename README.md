<h1>This is a full stack challenge – involves both backend and frontend parts.</h1>

<p>
  <h1>Backend</h1>
<h3>Objective</h3>
  <p>
Build and deploy a REST API with one endpoint that accepts requests with both GET and POST methods.
POST method endpoint takes in the request (JSON) and returns the following:
1. Status
2. User ID
3. College Email ID
4. College Roll Number
5. Array for numbers
6. Array for alphabets
GET method endpoint doesn’t take any user input, it just returns an operation_code
- Please refer to Annexure (A) for request/response samples
Hosting
Any provider of your choice, if you don’t have one already, please use Heroku / Netlify / Vercel / Firebase or
any other provider that provides REST API deployment.
Logic – (2 Parts)
1. Route: /bfhl | Method: POST

a. Example: https://testbfhl.herokuapp.com/bfhl [POST Method]
b. Response should always contain your user_id (fullname_dob) in the following format
i. "user_id": {full_name_ddmmyyyy}
E.g.: "user_id”: "john_doe_17091999"

c. “is_success” should be returned in the response to mark the status of operation. It can
be true / false

______________________

2. Route: /bfhl | Method: GET

a. Example: https://testbfhl.herokuapp.com/bfhl [GET Method]
b. Doesn’t take any input from the user. The endpoint will be hit with a GET request, that’s
it.
c. Expected HTTP Status Code: 200
d. Expected Response Body (hardcoded) (JSON):
{
“operation_code”:1
}

Note: Be sure to follow other best practices including exception handling, input validation and others.

Annexure (A) - (ONLY FOR POST REQUEST)
Example A

Note: If an alphabet is present in the input, it will always be a single character, never a word. And
“highest_alphabet” refers to the alphabet from the input array which occurs last in the A-Z series (case
insensitive).
Request
{
"data": [“M”,”1”,”334”,”4”,”B”]
}

Response
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"numbers": [“1”,”334”,”4”],
"alphabets": [“M”,”B”],
“highest_alphabet”:[“M”]
}

Example B

Request
{
"data": [“2”,”4”,”5”,”92”]

}
Response
{
"is_success": true,
"user_id": "john_doe_17091999", “email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"numbers": [“2”,”4”,”5”,”92”],
"alphabets": [],
“highest_alphabet”:[]

}

Example C

Request
{
"data": ["A",”C”,”z”]
}
Response
{
"is_success": true,
"user_id": "john_doe_17091999", “email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"numbers": [],
"alphabets": ["A",”C”,”z”],
“highest_alphabet”:[“z”]

}
</p>
</p>
