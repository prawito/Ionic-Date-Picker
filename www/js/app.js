angular.module('starter', ['ionic', 'ionic-datepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('datePickerCtrl', function($scope){
  $scope.selectedDate = new Date();

  $scope.datepickerObject = {
    titleLabel: 'Title',
    todayLabel: 'Today',
    closeLabel: 'Close',
    setLabel: 'Set',
    setButtonType : 'button-positive',
    todayButtonType : 'button-balanced',
    closeButtonType : 'button-assertive',
    inputDate: new Date(),
    mondayFirst: true,
    disabledDates: disabledDates,
    weekDaysList: weekDaysList,
    monthList: monthList,
    templateType: 'popup',
    showTodayButton: 'true',
    modalHeaderColor: 'bar-positive',
    modalFooterColor: 'bar-positive',
    from: new Date(2012, 8, 2),
    to: new Date(2018, 8, 25),
    callback: function (val) {
      datePickerCallback(val);
    },
    dateFormat: 'dd-MM-yyyy',
    closeOnSelect: false
  };

  var disabledDates = [
    new Date(1437719836326),
    new Date(),
    new Date(2015, 7, 10),
    new Date('Wednesday, August 12, 2015'),
    new Date("08-14-2015"),
    new Date(1439676000000)
  ];

  var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];

  var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  var datePickerCallback = function (val) {
    if (typeof(val) === 'undefined') {
      console.log('No date selected');
    } else {
      $scope.selectedDate = val;
      console.log('Selected date is : ', val)
    }
  };

  $scope.currentDate = function(){
    $scope.selectedDate = new Date();
  }
})
