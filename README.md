# catosoft_test
//A well designed node modules structures to get servers which are online from a dummy array of servers

//if all servers are offline like "http://offline.google.com" then it shows all servers are offline with status code of 400

//if all or some servers are online like "http://google.com" then it shows the array of servers which are online

//i wrote a middleware async.js in middleware to handle try-catch block, by this i don't have to write try-catch every time for asynchorous functions

//modules- 1. models contain Server.js dummy array list of servers

           2. controllers contains server.js a function getServers for controlling all servers
           
           3. config contains all the environment variables
           
           4. routes made for handling routes of the controllers
           
           5. __test__ for unit tests
           
           and app.js controll whole backend.
           
           
  response for success:
  
  [
  
    {
        "url": "http://boldtech.co",
        "priority": 2
    },
    
    {
        "url": "http://instagram.com",
        "priority": 3
    },
    
    {
        "url": "http://google.com",
        "priority": 4
    },
    
    {
        "url": "http://facebook.com",
        "priority": 5
    },
    
    {
        "url": "http://tinder.com",
        "priority": 8
    },
    
    {
        "url": "http://amazon.com",
        "priority": 9
    }
]

response for failure: "All servers are offline"
           
