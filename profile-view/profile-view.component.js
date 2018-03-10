// TODO: MAKE A PROFILE-VIEW COMPONENT
angular.module("finalAssessment").component("profileView", {
  templateUrl: "profile-view/profile-view.html",
  bindings: {
    profile: "<"
  },
  controller: ['LoginService',"$location", function(LoginService, $location) {

  this.userDetails = {};

  this.$onInit = function() {
    this.userDetails = LoginService.getProfile()
    console.log(this.userDetails);
  }
  }]
});
