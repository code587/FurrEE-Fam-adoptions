const db = require('../config/connection');
const { User, available, Boxer, Dog, Greyhound, Poodle } = require('../models');
const userSeeds = require('./userSeeds.json');
const availableSeeds = require('./available.json');
const boxerSeeds = require('./Boxer.json');
const dogSeeds = require('./Dog.json');
const greyhoundSeeds = require('./Greyhound.json');
const poodleSeeds = require('./Poodle.json')

db.once('open', async () => {
  try {
    await available.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
