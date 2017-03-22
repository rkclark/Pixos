const CARD_DATA_OBJECT =
  {
    deckLimit: 20,
    cards: [
      { _id: 1, name: 'hummingbird', imgUrl: '/img/hummingbird.svg', type: 'air', power: 1, cost: 10, special: 'meteor', description: 'Meteor: Sets the power of all Air type cards to 1 for both players.' , doubled: false, meteored: false  },
      { _id: 2, name: 'bird', imgUrl: '/img/bird.svg', type: 'air', power: 1, cost: 7, special: 'paragon', description: 'Paragon: Doubles the strength of all Air cards on your side of the field.' , doubled: false, meteored: false  },
      { _id: 3, name: 'bat', imgUrl: '/img/bat.svg', type: 'air', power: 1, cost: 25, special: 'resurrector', description: 'Resurrector: Add two random cards from your discard pile back into your hand.' , doubled: false, meteored: false  },
      { _id: 4, name: 'beipiaosaurus', imgUrl: '/img/beipiaosaurus.svg', type: 'air', power: 3, cost: 4, special: '', description: 'Dinosaur equivalent of a sloth. Seriously, google it.' , doubled: false, meteored: false  },
      { _id: 5, name: 'toucan', imgUrl: '/img/toucan.svg', type: 'air', power: 4, cost: 6, special: '', description: 'Toucan play at that game.' , doubled: false, meteored: false  },
      { _id: 6, name: 'caudipteryx', imgUrl: '/img/caudipteryx.svg', type: 'air', power: 4, cost: 6, special: '', description: 'This guy had feathers. That\'s 80% of flying, right?' , doubled: false, meteored: false  },
      { _id: 7, name: 'owl', imgUrl: '/img/owl.svg', type: 'air', power: 5, cost: 8, special: '', description: 'Favourite subject at school: Owl-gebra.' , doubled: false, meteored: false  },
      { _id: 8, name: 'penguin', imgUrl: '/img/penguin.svg', type: 'air', power: 5, cost: 8, special: '', description: 'Don\'t you dare tell us that penguins can\'t fly.' , doubled: false, meteored: false  },
      { _id: 9, name: 'beetle', imgUrl: '/img/beetle.svg', type: 'air', power: 6, cost: 10, special: '', description: 'Herbie ain\'t got nothing on me.' , doubled: false, meteored: false  },
      { _id: 10, name: 'bee', imgUrl: '/img/bee.svg', type: 'air', power: 6, cost: 10, special: '', description: 'Float like a butterfly ...' , doubled: false, meteored: false  },
      { _id: 11, name: 'rhamphorhynchus', imgUrl: '/img/rhamphorhynchus.svg', type: 'air', power: 7, cost: 15, special: '', description: 'Pronouncing the name of this card correctly increases your Dino Dollars by $9000.' , doubled: false, meteored: false  },
      { _id: 12, name: 'pterodactyl', imgUrl: '/img/pterodactyl.svg', type: 'air', power: 8, cost: 20, special: '', description: 'Terror of the skies!' , doubled: false, meteored: false  },
      { _id: 13, name: 'mothra', imgUrl: '/img/mothra.svg', type: 'air', power: 12, cost: 40, special: '', description: '"Mightiest Monster in all Creation!"' , doubled: false, meteored: false  },
      { _id: 14, name: 'apatosaurus', imgUrl: '/img/apatosaurus.svg', type: 'land', power: 1, cost: 10, special: 'meteor', description: 'Meteor: Sets the power of all Land type cards to 1 for both players.' , doubled: false, meteored: false  },
      { _id: 15, name: 'sauropelta', imgUrl: '/img/sauropelta.svg', type: 'land', power: 1, cost: 7, special: 'paragon', description: 'Paragon: Doubles the strength of all Land cards on your side of the field.' , doubled: false, meteored: false  },
      { _id: 16, name: 'pelicanimimus', imgUrl: '/img/pelicanimimus.svg', type: 'land', power: 1, cost: 25, special: 'resurrector', description: 'Resurrector: Add two random cards from your discard pile back into your hand.' , doubled: false, meteored: false  },
      { _id: 17, name: 'dilophosaurus', imgUrl: '/img/dilophosaurus.svg', type: 'land', power: 1, cost: 2, special: '', description: 'When played send all Nedry\'s to the discard pile.' , doubled: false, meteored: false  },
      { _id: 18, name: 'iguanodon', imgUrl: '/img/iguanodon.svg', type: 'land', power: 1, cost: 2, special: '', description: 'These dinosaurs were herbivores. Scientists are unsure of what they ate. I\'m sure it\'s plants.' , doubled: false, meteored: false  },
      { _id: 19, name: 'azendohsaurus', imgUrl: '/img/azendohsaurus.svg', type: 'land', power: 2, cost: 3, special: '', description: 'Has terrible eyesight. Should be named Do-you-think-he-saurus.' , doubled: false, meteored: false  },
      { _id: 20, name: 'parasaurolophus', imgUrl: '/img/parasaurolophus.svg', type: 'land', power: 3, cost: 4, special: '', description: 'Posts xenophobic rants on his facebook page.' , doubled: false, meteored: false  },
      { _id: 21, name: 'bactrosaurus', imgUrl: '/img/bactrosaurus.svg', type: 'land', power: 4, cost: 6, special: '', description: 'Interior decorator and a bit of a ladies man. Great at laying rep-tiles' , doubled: false, meteored: false  },
      { _id: 22, name: 'scelidosaurus', imgUrl: '/img/scelidosaurus.svg', type: 'land', power: 4, cost: 6, special: '', description: 'This guy is no fun at sleep overs. He dino-snores.' , doubled: false, meteored: false  },
      { _id: 23, name: 'panda', imgUrl: '/img/panda.svg', type: 'land', power: 4, cost: 6, special: '', description: 'I got broads in Atlanta.' , doubled: false, meteored: false  },
      { _id: 24, name: 'amargasaurus', imgUrl: '/img/amargasaurus.svg', type: 'land', power: 5, cost: 8, special: '', description: 'Come dino with me.' , doubled: false, meteored: false  },
      { _id: 25, name: 'scutellosaurus', imgUrl: '/img/scutellosaurus.svg', type: 'land', power: 5, cost: 8, special: '', description: 'Great at math, terrible at parties.' , doubled: false, meteored: false  },
      { _id: 26, name: 'styracosaurus', imgUrl: '/img/styracosaurus.svg', type: 'land', power: 5, cost: 8, special: '', description: 'Off brand Triceratops.' , doubled: false, meteored: false  },
      { _id: 27, name: 'yinlong', imgUrl: '/img/yinlong.svg', type: 'land', power: 5, cost: 8, special: '', description: 'Crouching Dinosaur, Hidden Dragon.' , doubled: false, meteored: false  },
      { _id: 28, name: 'ankylosaurus', imgUrl: '/img/ankylosaurus.svg', type: 'land', power: 6, cost: 10, special: '', description: 'Works part time as a carpenter. Favourite tool is a dino-saw.' , doubled: false, meteored: false  },
      { _id: 29, name: 'coelophysis', imgUrl: '/img/coelophysis.svg', type: 'land', power: 6, cost: 10, special: '', description: 'One of few dinosaurs whose names doesn\'t end with saurus...probably. I didn\'t check.' , doubled: false, meteored: false  },
      { _id: 30, name: 'protoceratops', imgUrl: '/img/protoceratops.svg', type: 'land', power: 6, cost: 10, special: '', description: 'Like a triceratops but less horny. Partner is dissapointed.' , doubled: false, meteored: false  },
      { _id: 31, name: 'brachiosaurus', imgUrl: '/img/brachiosaurus.svg', type: 'land', power: 7, cost: 15, special: '', description: 'If you\'re not humming the Jurrassic Park theme tune then there\'s something wrong.' , doubled: false, meteored: false  },
      { _id: 32, name: 'plateosaurus', imgUrl: '/img/plateosaurus.svg', type: 'land', power: 7, cost: 15, special: '', description: 'Brother of Bowlosaurus. Cousins with Knifeosaurus and Forkosaurus.' , doubled: false, meteored: false  },
      { _id: 33, name: 'syntarsus', imgUrl: '/img/syntarsus.svg', type: 'land', power: 7, cost: 15, special: '', description: 'Throws errors if not spelt correctly.... because the name looks a bit like syntax. Okay forget it, this one is a stretch' , doubled: false, meteored: false  },
      { _id: 34, name: 'stegosaurus', imgUrl: '/img/stegosaurus.svg', type: 'land', power: 8, cost: 20, special: '', description: 'Bony plates and a tiny brain. \+ 5 Armor \-10 Intelligence.' , doubled: false, meteored: false  },
      { _id: 35, name: 'triceratops', imgUrl: '/img/triceratops.svg', type: 'land', power: 8, cost: 20, special: '', description: 'Scientists recently discovered that Triceratops didn\'t have 3 horns. That\s definitely not true.' , doubled: false, meteored: false  },
      { _id: 36, name: 'velociraptor', imgUrl: '/img/velociraptor.svg', type: 'land', power: 8, cost: 20, special: '', description: '"That doesn\'t look very scary. More like a six-foot turkey."' , doubled: false, meteored: false  },
      { _id: 37, name: 'dracorex', imgUrl: '/img/dracorex.svg', type: 'land', power: 8, cost: 20, special: '', description: 'CEO\'s favourite. Playing this card increases chance of being hired x 10.' , doubled: false, meteored: false  },
      { _id: 38, name: 'tyrannosaurus-rex', imgUrl: '/img/tyrannosaurus-rex.svg', type: 'land', power: 9, cost: 25, special: '', description: '"Don\'t move! He can\'t see us if we don\'t move!"' , doubled: false, meteored: false  },
      { _id: 39, name: 'spinosaurus', imgUrl: '/img/spinosaurus.svg', type: 'land', power: 10, cost: 30, special: '', description: 'T-rex is great, but there\'s always a bigger fish.' , doubled: false, meteored: false  },
      { _id: 40, name: 'clam', imgUrl: '/img/clam.svg', type: 'water', power: 1, cost: 10, special: 'meteor', description: 'Meteor: Sets the power of all Water type cards to 1 for both players.' , doubled: false, meteored: false  },
      { _id: 41, name: 'fish', imgUrl: '/img/fish.svg', type: 'water', power: 1, cost: 7, special: 'paragon', description: 'Paragon: Doubles the strength of all Water cards on your side of the field.' , doubled: false, meteored: false  },
      { _id: 42, name: 'starfish', imgUrl: '/img/starfish.svg', type: 'water', power: 1, cost: 25, special: 'resurrector', description: 'Resurrector: Add two random cards from your discard pile back into your hand.' , doubled: false, meteored: false  },
      { _id: 43, name: 'ichthyosaurus', imgUrl: '/img/ichthyosaurus.svg', type: 'water', power: 4, cost: 6, special: '', description: 'More terrifying than a shark, less powerful than a jellyfish.' , doubled: false, meteored: false  },
      { _id: 44, name: 'elasmosaurus', imgUrl: '/img/elasmosaurus.svg', type: 'water', power: 6, cost: 10, special: '', description: 'Had an extremely long neck. You know what they say about dinosaurs with long necks.' , doubled: false, meteored: false  },
      { _id: 45, name: 'dolphin', imgUrl: '/img/dolphin.svg', type: 'water', power: 6, cost: 10, special: '', description: 'So long and thanks for all the fish.' , doubled: false, meteored: false  },
      { _id: 46, name: 'crab', imgUrl: '/img/crab.svg', type: 'water', power: 7, cost: 15, special: '', description: 'There\'s plenty of fish in the sea. Just be careful not to catch crabs.' , doubled: false, meteored: false  },
      { _id: 47, name: 'jellyfish', imgUrl: '/img/jellyfish.svg', type: 'water', power: 8, cost: 20, special: '', description: 'Makes a great sandwich with Peanutbutterfish.' , doubled: false, meteored: false  },
      { _id: 48, name: 'basilosaurus', imgUrl: '/img/basilosaurus.svg', type: 'water', power: 9, cost: 25, special: '', description: 'Beast of the seas. Great in Italian dishes.' , doubled: false, meteored: false  },
      { _id: 49, name: 'crocodile', imgUrl: '/img/crocodile.svg', type: 'water', power: 9, cost: 25, special: '', description: 'Never smile at this guy.' , doubled: false, meteored: false  },
      { _id: 50, name: 'whale', imgUrl: '/img/whale.svg', type: 'water', power: 10, cost: 30, special: '', description: '"His power level!!! It\'s over 9!!"' , doubled: false, meteored: false  }
                ]
  }


module.exports = { CARD_DATA:  CARD_DATA_OBJECT }
