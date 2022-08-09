const list = [
  {
    id: 0,
    name: 'apple',
    description: 'Good, red or green',
  },
  {
    id: 1,
    name: 'strawberry',
    description: 'sweet , reed',
  },
  {
    id: 2,
    name: 'pineapple',
    description: 'Bitter, green',
  },
  {
    id: 3,
    name: 'banana',
    description: 'sweet, yellow',
  },
  {
    id: 4,
    name: 'grape',
    description: 'very sweet, purple or green',
  },
  {
    id: 5,
    name: 'orange',
    description: 'can be bitter or sweet, orange',
  },
  {
    id: 6,
    name: 'lime',
    description: 'bitter, green',
  },
]

const ACTIONS = {
  ADD_FRUIT: 'add-fruit',
  DELETE_FRUIT: 'delete-fruit',
  ALTER_FRUIT: 'alter-fruit',
  RESET_FRUIT: 'reset',
}

export { list, ACTIONS }
