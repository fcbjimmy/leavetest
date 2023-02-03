const accessibility = [
  { title: "Home", permission: ["HR", "Admin", "Supervisor", "User"] },
  {
    title: "Users",
    permission: ["HR"],
  },
  {
    title: "Leave Type",
    permission: ["HR"],
  },
  {
    title: "Leave Request",
    permission: ["HR", "Admin", "Supervisor", "User"],
  },
  {
    title: "Leave Approval",
    permission: ["HR", "Supervisor"],
  },
  {
    title: "Leave History",
    permission: ["HR", "Admin"],
  },
];

const home = ["HR", "Admin", "Supervisor", "User"];
const user_management = ["HR"];
const leave_request = ["HR", "Admin", "Supervisor", "User"];
const leave_approval = ["HR", "Supervisor"];
const leave_history = ["HR", "Admin"];

export { home, user_management, leave_request, leave_approval, leave_history };
