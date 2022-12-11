function friend(friends) {
  return friends.filter((trueFriend) => {
    return trueFriend.length === 4;
  });
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));

// function friend(friends) {
//   const trueFriend = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length === 4) {
//       trueFriend.push(friends[i]);
//     }
//   }
//   console.log(trueFriend);
//   return trueFriend;
// }

// friend(['Ryan', 'Kieran', 'Mark']);
