import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  InboxStackIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  {
    link: "/home",
    icon: <HomeIcon className="h-5 w-5" />,
    title: "Home",
    permission: ["HR", "Admin", "Supervisor", "User"],
  },
  {
    link: "/users/management",
    icon: <UserGroupIcon className="h-5 w-5" />,
    title: "Users",
    permission: ["HR"],
  },
  {
    link: "/leave/type/management",
    icon: <DocumentDuplicateIcon className="h-5 w-5" />,
    title: "Leave Type",
    permission: ["HR"],
  },
  {
    link: "/leaverequests",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
    title: "Leave Request",
    permission: ["HR", "Admin", "Supervisor", "User"],
  },
  {
    link: "/leaveapprovals",
    icon: <InboxStackIcon className="h-5 w-5" />,
    title: "Leave Approval",
    permission: ["HR", "Supervisor"],
  },
  {
    link: "/leavehistory",
    icon: <ArchiveBoxIcon className="h-5 w-5" />,
    title: "Leave History",
    permission: ["HR", "Admin"],
  },
];

export { navItems };
