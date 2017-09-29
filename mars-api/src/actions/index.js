import * as types from "./../constants/ActionTypes";
// 
// export const requestGit = (user) => ({
//   type: types.REQUEST_GIT,
//   user
// });
//
// export const showGit = (profile) => ({
//   type: types.SHOW_GIT,
//   profile
// })


export function fetchProfile(user) {
  return function (dispatch) {
    const localSongId = v4();
    user = user;
    return fetch("https://api.github.com/users/poterekm", {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }).then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log("CHECK OUT THIS SWEET API RESPONSE:", json)
    });
  };
}
