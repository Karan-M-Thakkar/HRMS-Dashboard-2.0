const dashboardApp = angular.module("dashboardApp", []);
dashboardApp.controller("dashboardCtrl", function ($scope, $log) {
  $log.info("Controller loaded successfully!");

  $scope.categories = [
    {
      category: "HRMS",
      modules: [
        "Approve Probation Confirmation",
        "Approve Resignation/Probation",
        "Employee Probation",
        "Record Resignation",
        "Onboard",
        "New Hire Survey",
        "HRF",
        "Employee Exit Interview",
      ],
    },
    {
      category: "Prod & Proj Planning",
      modules: ["QGate Management", "PRC", "PR & PO"],
    },
    {
      category: "Performance",
      modules: [
        "COBC Quiz",
        "RTM",
        "RTM Report",
        "RTM Admin",
        "RTM Resource Manager",
        "Performance Review System(PRS)",
        "Productivity Tracking",
      ],
    },
    {
      category: "General",
      modules: [
        "Direct Reportee Details",
        "HRIS",
        "Policy Documents",
        "Calendar Automation",
        "Organization Tree",
      ],
    },
    {
      category: "Master Config",
      modules: ["Masters", "Security Masters"],
    },
    {
      category: "Leave & Attendance",
      modules: [
        "Apply Leave",
        "Approve Attendance Regularization",
        "Approve Leave",
        "Attendance",
        "Leave Management",
      ],
    },
    {
      category: "Reports",
      modules: [
        "Reports",
        "COBC & CGLR Report",
        "Finance Reports",
        "Finance Dashboard",
      ],
    },
    {
      category: "Feedback",
      modules: ["VOC"],
    },
  ];

  const visionTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.";

  const missionTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris.";

  const focusTabText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.`;

  const teamTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut.";

  $scope.changeKnowYourNapTab = (tab) => {
    $scope.currentTab = tab;
    switch (tab) {
      case "vision":
        $scope.modalTabText = visionTabText;
        return;
      case "mission":
        $scope.modalTabText = missionTabText;
        return;
      case "focus":
        $scope.modalTabText = focusTabText;
        return;
      case "team":
        $scope.modalTabText = teamTabText;
        return;
      default:
        $scope.modalTabText = visionTabText;
        return;
    }
  };

  $scope.openChatBox = () => {
    $scope.isChatBoxOpened = true;
  };

  $scope.closeChatBox = () => {
    $scope.isChatBoxOpened = false;
  };

  $scope.isChatBoxOpened = false;
  $scope.changeKnowYourNapTab("vision");
});
