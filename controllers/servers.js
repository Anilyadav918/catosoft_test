
const asyncHandler = require('../middleware/async');
const Servers = require('../models/Servers');

//Function to get all servers async/await
    exports.getServers = asyncHandler(async(req, res, next) => {
        const servers = await Servers;
        let url;
        let priority;
        let flag = false;
        let result = servers.filter(server => {
        url = server.url;
        let data;
        priority = server.priority;
        //taking out the url from the server array
        let url_ = server.url;
        //splitting th array by // so that it becomes [ 'http:', 'doesNotExist.boldtech.co' ]
        url_ = url_.split('//');
        //again splitting the second part of the above url_ array to get in form [ 'doesNotExist', 'boldtech', 'co' ]
        url_ = url_[1].split('.');
        //now taking the first part of the above array and converting it to lower case for comparison
        url_ = url_[0].toLowerCase();
        //Checking for offline users 
        return url_ !== "offline" && url_ !== "doesnotexist";
            
        // if(url_ !== "offline" && url_ !== "doesnotexist"){
        //     flag = true;
        //     data = {url, priority};      
        // } else {
        //     return {};
        // }
        // return data;
    })
        //
        if (result.length > 0) {
        
        result = result.map((server) => {
            return {
                "url" : server.url,
                "priority": server.priority
            }

        })

        //sorting the result on their priorities in ascending order
        result.sort((a,b) => {
            return a.priority - b.priority;
        })
        //sending response
        res.status(200).json(result);
        } else {
            res.status(400).send("All servers are offline");
        }
})