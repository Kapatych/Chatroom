const users = [];

const addUser = ({id, name, room}) => {
  // Transform to lower case without spaces
  //name = name.toLowerCase();
  //room = room.toLowerCase();

  // Checking for existing user in the room
  const existingUser = users.find(user => user.room === room && user.name.toLowerCase() === name.toLowerCase());

  if (existingUser) return {error: `Username '${name}' is taken`};

  // Add new user
  const user = {id, name, room};
  users.push(user);

  return {user}
};

const removeUser = (id) => {
  // Find user index
  const index = users.findIndex(user => user.id === id);

  //Remove and return removed user
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find( user => user.id === id);

const getUsersInRoom = (room) => users.filter( user => user.room === room );

module.exports = {addUser, removeUser, getUser, getUsersInRoom};