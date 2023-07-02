process.env.UV_THREADPOOL_SIZE=1
const cluster = require('cluster');

// function work (duration){
//  const start = Date.now();
//  while(Date.now() < start + duration){
//  }
// }

if (cluster.isMaster) {
      cluster.fork();
      cluster.fork();
}
else {
      const crypto = require('crypto')
      const express = require('express')
      const app = express()

      app.get('/', (req, res) => {
            crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
                  res.send('hiii')
            })
      })

      app.get('/fast', (req, res) => {
            res.send('hi there')
      })

      app.listen('8080', () => {
            console.log('running')
      })

}