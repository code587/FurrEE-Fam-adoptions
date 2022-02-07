const db = require('../config/connection');
const { Dog, Adopt, User,} = require('../models');
const userData = require('./userData.json');
const adoptData = require('./adoptData.json');
//const boxerSeeds = require('./Boxer.json');
const dogData = require('./Dogdata.json');
//const greyhoundSeeds = require('./Greyhound.json');
//const poodleSeeds = require('./Poodle.json')

db.once('open', async () => {
 
  await Dog.deleteMany({});
  await Adopt.deleteMany({});
  await User.deleteMany({});

  const dogs = await Dog.insertMany(dogData);
  const adopt = await Adopt.insertMany(adoptData);
  const users = await User.insertMany(userData);
    
  });

  console.log('all done!');
  process.exit(0);

