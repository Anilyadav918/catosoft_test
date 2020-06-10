const asyncHandler = require('../middleware/async');
const Servers = require('../models/Servers.json');

//Function to get all servers async/await
exports.getServers = asyncHandler(async(req, res, next) => {
        const servers = await Servers;
        let url;
        let priority;
        let flag = false;
        let result = servers.map(server => {
            url = server.url;
            let data;
            priority = server.priority;
            let url_ = server.url;
            
            url_ = url_.split('//');
             
            url_ = url_[1].split('.');
            
            url_ = url_[0].toLowerCase();
                
                if(url_ === 'offline' || url_ === 'doesnotexist'){
                    flag = false;
                    //return 'Servers are offline';
                }else if(url_ !== 'offline' || url_ !== 'doesnotexist'){
                    flag = true;
                    data = {url, priority};
                    return data;      
             }
             return data;
        })
    
            //sorting the result on their priorities in ascending order
            result.sort((a,b) => {
                return a.priority - b.priority;
            })
            //sending response
            res.status(200).json(result);

})

