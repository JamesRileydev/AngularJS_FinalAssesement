// WRITE A COMPONENT HERE!!!!
angular.module("finalAssessment").component("appLogin", {
  templateUrl: "app-login/app-login.html",
  controller: ['LoginService',"$location", function(LoginService, $location) {
    this.username = "";
    this.password = "";

    this.login = function() {
      LoginService.login(this.username, this.password);
      console.log(this.username + this.password);
      $location.url("/profile-view");
    }
  }]
});
