// level {2}
function getUsers() {
    return Promise.all(getUser(), getProfile(), getPosts()).then(doc=> { return {user: doc[0], profile: doc[1], posts: doc[2]}})
  }

