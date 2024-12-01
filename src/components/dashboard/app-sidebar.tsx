"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  Frame,
  PieChart,
  UserPlus,
  WalletMinimal,
  NotebookPen,
} from "lucide-react";

import { AcademicYearSwitcher } from "./academicYear-switcher";
import { NavMain } from "./nav-main";
import { NavAccount } from "./nav-accounts";

const data = {
  academicYears: ["2020-2021", "2021-2022", "2023-2024", "2024-2025"],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Student Information",
      url: "#",
      icon: UserPlus,
      isActive: true,
      items: [
        { title: "Student Details", url: "#" },
        { title: "Online Admission", url: "#" },
        { title: "Disabled Students", url: "#" },
        { title: "Student Categories", url: "#" },
        { title: "Student House", url: "#" },
        { title: "Disable Reason", url: "#" },
      ],
    },
    {
      title: "Academics",
      url: "#",
      icon: NotebookPen,
      isActive: true,
      items: [
        { title: "Class Timetable", url: "#" },
        { title: "Teachers Timetable", url: "#" },
        { title: "Assign Class Teacher", url: "#" },
        { title: "Promote Students", url: "#" },
        { title: "Subject Group", url: "#" },
        { title: "Subjects", url: "#" },
        { title: "Class", url: "#" },
        { title: "Section", url: "#" },
      ],
    },
    {
      title: "Examination",
      url: "#",
      icon: WalletMinimal,
      isActive: true,
      items: [
        { title: "Exam Group", url: "#" },
        { title: "Exam Schedule", url: "#" },
        { title: "Exam Result", url: "#" },
        { title: "Grade System", url: "#" },
      ],
    },
  ],

  account: [
    {
      title: "Fee Collection",
      url: "#",
      icon: Frame,
    },
    {
      title: "Income",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Expenditure",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Inventory",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader>
        <AcademicYearSwitcher
          academicYears={data.academicYears}
          defaultAcademicYear={data.academicYears[3]}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <NavMain items={data.navMain} />
        <NavAccount items={data.account} />
      </SidebarContent>
      <SidebarFooter>Logout</SidebarFooter>
    </Sidebar>
  );
}
