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
<p>
<h1>Frontend</h1>
<h3>Objective</h3>
  <p>
Develop and deploy a frontend application that uses the backend you’ve developed to process the input and
get response, then render it on frontend. (Preferably React based – including frameworks like Next.js, but
that’s optional).

Logic
1. The application should have a text input that accepts JSONs that are from the previous section’s
(backend’s) request. Example - { "data": ["A",”C”,”z”] }
2. The frontend application should call the REST API that you’ve created to process the data in request
and return the response as per the logic mentioned in backend challenge.
Details:
Create a user interface with the following features:
1. Text input field and submit button:
- Accepts only valid JSON input
- Validates JSON format on submission
- Calls the REST API that you’ve created, with payload from the text input
- Gets the response and then uses the following logic to render it
2. Dropdown menu:
- Appears after valid JSON submission
- Contains the following sections (on UI):
a. Characters
b. Numbers
c. Highest alphabet
3. Multiselect for toggling visibility of UI sections
- The display of Characters / Numbers / Highest alphabet should be based on this
multiselect. For example, if only Numbers and Characters are selected in multiselect, only
those should be visible on the UI and Highest alphabet should not be visible.
4. The website title should be your roll number
Eg: In the following image, “Google” is the title of the first tab.
</p>
</p>

</p>
