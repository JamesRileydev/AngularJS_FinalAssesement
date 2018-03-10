//

angular.module("finalAssessment").service("LoginService", ["$location", "$q", function($location, $q) {

  // THIS METHOD RETURNS A PROMISE! JUST AS IF YOU WERE TALKING TO A SERVER.
  this.login = function(username, password) {
    return new $q ((resolve, reject) => {
      this.loggedInUser = userList.find(user => username === user.username && user.password === password)
      if (this.loggedInUser) {
        $location.url("/profile");
        resolve(this.loggedInUser);
      } else {
        reject("Incorrect username or password");
      }
    });
  }

  this.getProfile = function() {
    return this.loggedInUser;
  }

  var userList = [
    {
      username: 'indianajones',
      password: 'coolPassword',
      name: 'Indiana Jones',
      email: 'indianajones@gmail.com',
      img: '/images/indianajones.jpg',
      location: 'Portland, OR',
      phone: '333-333-5555'
    },
    {
      username: 'taylorswift',
      password: 'awsomePassword',
      name: 'Taylor Swift',
      email: 'tswift@gmail.com',
      img: '/images/taylorswift.jpg',
      location: 'Detroit, MI',
      phone: '222-444-6666'
    },
    {
      username: 'grantchirpus',
      password: 'greatPassword',
      name: 'Grant Chirpus',
      email: 'grantChirpus@gmail.com',
      img: '/images/grantchirpus.png',
      location: 'Detroit, MI',
      phone: '111-777-3333'
    }
  ];

  var loggedInUser = {};
}]);
