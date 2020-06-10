const express = require('express');

const { getServers } = require('../controllers/servers');

const router = express.Router();

router
    .route('/')
    .get(getServers);

module.exports = router;




/*for(let i = 0; i<servers.length; i++){
            url =  servers[i].url;
            const url_ =  servers[i].url;
            priority =  servers[i].priority;
            //console.log(url,priority);
            url =  url.split('//');
            url =  url[1].split('.');
            url =  url[0].toLowerCase();

            if(url === 'offline' || url === 'doesnotexist'){
                //res.status(400).json({success:false}); 
                //throw new Error('Servers are offline');
            } else if((url !== 'offline' || url !== 'doesnotexist')){
                const data = [{ url_, priority}];
                //data.sort((a,b) => parseInt(a.priority) - parseInt(b.priority));
                console.log(data);
            }
        }*/