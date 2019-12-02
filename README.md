# Search-Books-Challenge
# Author: Thiago de Campos - thiagocamposde@gmail.com

# pre-requisits
Node 10.5

# Running the projet
To run this app you can type ``npm install`` and ``npm start``. It will run both back and frontend at the same time.

OBS: The database configuration is located at ``.env`` file in the root folder. I put it hardcoded because i didn't had time to build a dynamic environment.

# Architecture
The application architecture was decided around two concerns: be simple because of the scope and short time and yet be flexible to future scale and improvements.

For this challenge, to make things easy for deployment and presentation I decided to put both frontend and backend together at the same repository. The frontend application are inside the /client folder and can be easily separeted if wanted. 

  ## Frontend: 
  To bootstrap the application I used create-react-app.

  The components are separated in two subfolder: screens, wich are the components correspondents to each different route, and base, the components that don't do any side effects and can be reused in diferent screens.

  Each entitie or group of subject has it's own api file at /api, wich is responsible for fetching data.

  ## Backend: 
  I tried to use the most basic structure I could, using express to handle the API.

# Third-party libraries
  `` Material-ui ``
  Used in frontend for basic style and couple of components, grid system and responsive concerns

  `` React paginate ``
  Used in frontend for pagination. I tried to minimize the effords using those components 

  `` Axios ``
  Axios is a great tool to use with react and node, providing easy ways to handle and manipulate requests

  Other libraries and tools worth to mention are: 
   - ``Standard``: for linting purposes
   - ``React Router``: Essential for routing components in react
   - ``Nodemon``: Usefull for auto refresh the server
   - ``Moment``: Usefull to manipulate and format dates


