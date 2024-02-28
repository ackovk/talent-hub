import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ProfileTabs from "./ProfileTabs";
import Sidebar from "./Sidebar";

const statuses = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};
const environments = {
  Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};
const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  // More deployments...
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  return (
    <>
      <div>
        <Sidebar />

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <h1 className="text-xl font-semibold">Profile</h1>
            </div>
          </div>

          <main className="pl-6">
            <ProfileTabs />

            <h1 className="text-lg font-medium">Personal Details</h1>
          </main>
        </div>
      </div>
    </>
  );
}
