const dashboardApp = angular.module("dashboardApp", []);
dashboardApp.controller("dashboardCtrl", function ($scope, $log) {
  $log.info("Controller loaded successfully!");

  $scope.modules = [
    {
      module: "HR",
      roles: [
        "Attendance",
        "Direct Reportee Details",
        "HRIS",
        "Masters",
        "Security Masters",
        "COBC Quiz",
        "COBC & CGLR Report",
        "Policy Documents",
      ],
    },
    {
      module: "FINANCE",
      roles: [
        "RTM",
        "RTM Admin",
        "RTM Resource Manager",
        "Performance Review System(PRS)",
        "Finance Dashboard",
        "QGate Management",
        "PR & PO",
        "HRF",
        "Calendar Automation",
        "Organization Tree",
      ],
    },
    {
      module: "HIRING",
      roles: [
        "Approve Probation Confirmation",
        "Approve Resignation/Probation",
        "Onboard",
        "New Hire Survey",
        "Employee Exit Interview",
      ],
    },
    {
      module: "PROCESS",
      roles: [
        "Apply Leave",
        "Approve Attendance Regularization",
        "Approve Leave",
        "Leave Management",
        "Employee Probation",
        "Record Resignation",
        "PRC",
        "VOC",
        "Productivity Tracking",
      ],
    },
    {
      module: "REPORTS",
      roles: ["Reports", "RTM Report", "Finance Reports"],
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
