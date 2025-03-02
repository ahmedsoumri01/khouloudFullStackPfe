"use client";

import * as React from "react";

import { NavMain } from "@/components/side-bar/nav-main";
import { NavUser } from "@/components/side-bar/nav-user";
import { TeamSwitcher } from "@/components/side-bar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  routes: {
    user: {
      name: string;
      email: string;
      avatar: string;
    };
    teams?: {
      name: string;
      logo: React.ElementType;
      plan: string;
    }[];
    navMain: {
      title: string;
      url: string;
      icon: React.ElementType;
      isActive?: boolean;
      items: { title: string; url: string }[];
    }[];
  };
}
export function AppSidebar({ routes, ...props }: AppSidebarProps) {
  console.log(routes);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {routes.teams && routes.teams.length > 0 && (
          <TeamSwitcher teams={routes.teams} />
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent></SidebarGroupContent>
        <NavMain items={routes.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={routes.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
