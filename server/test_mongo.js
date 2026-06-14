const mongoose = require('mongoose');
const uri = 'mongodb://eventoradmin:Hcst22it021@ac-diaff7n-shard-00-00.itzdjit.mongodb.net:27017,ac-diaff7n-shard-00-01.itzdjit.mongodb.net:27017,ac-diaff7n-shard-00-02.itzdjit.mongodb.net:27017/eventora?ssl=true&replicaSet=atlas-diaff7n-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('Success!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
