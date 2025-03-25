
import React from 'react';
import { Role } from "./role";
import { Link } from "react-router-dom";
import { RiTeamLine, RiTaskLine, RiDashboardLine, RiBarChart2Line, RiFileListLine, RiMoneyDollarCircleLine } from 'react-icons/ri';

export const menuItemsByRole: { [key: string]: { label: string; path: string; icon?: React.ReactNode; }[] } = {

  [Role.SuperAdmin]: [
    { label: "Manajemen Karyawan", path: "/employee-management", icon: <RiTeamLine size={22} /> },
    { label: "Rekrutmen & Onboarding", path: "/recruitment", icon: <RiTeamLine size={22} /> },
    { label: "Absensi & Kehadiran", path: "/attendance", icon: <RiTaskLine size={22} /> },
    { label: "Pengelolaan Cuti & Izin", path: "/leave-management", icon: <RiTaskLine size={22} /> },
    { label: "Payroll & Gaji", path: "/payroll", icon: <RiMoneyDollarCircleLine size={22} /> },
    { label: "Penilaian Kinerja", path: "/performance-evaluation", icon: <RiBarChart2Line size={22} /> },
    { label: "Pelatihan & Pengembangan", path: "/training", icon: <RiTaskLine size={22} /> },
    { label: "Manajemen Benefit", path: "/benefits", icon: <RiTaskLine size={22} /> },
    { label: "Laporan & Analitik HR", path: "/hr-reports", icon: <RiBarChart2Line size={22} /> },
    { label: "Employee Self-Service", path: "/ess", icon: <RiFileListLine size={22} /> },
    { label: "Compliance & Legal HR", path: "/compliance", icon: <RiFileListLine size={22} /> },
  ],

  [Role.Executive]: [
    { label: "Dashboard", path: "/dashboard", icon: <RiDashboardLine size={22} /> },
    { label: "Laporan & Analitik HR", path: "/hr-reports", icon: <RiBarChart2Line size={22} /> },
  ],

  [Role.Manager]: [
    { label: "Dashboard", path: "/dashboard", icon: <RiDashboardLine size={22} /> },
    { label: "Manajemen Karyawan", path: "/employee-management", icon: <RiTeamLine size={22} /> },
    { label: "Absensi & Kehadiran", path: "/attendance", icon: <RiTaskLine size={22} /> },
    { label: "Pengelolaan Cuti & Izin", path: "/leave-management", icon: <RiTaskLine size={22} /> },
  ],

  [Role.Supervisor]: [
    { label: "Dashboard", path: "/dashboard", icon: <RiDashboardLine size={22} /> },
    { label: "Absensi & Kehadiran", path: "/attendance", icon: <RiTaskLine size={22} /> },
  ],

  [Role.Employee]: [
    { label: "Dashboard", path: "/dashboard", icon: <RiDashboardLine size={22} /> },
    { label: "Absensi & Kehadiran", path: "/my-attendance", icon: <RiTaskLine size={22} /> },
    { label: "Pengajuan Cuti", path: "/my-leave-request", icon: <RiFileListLine size={22} /> },
    { label: "Slip Gaji", path: "/my-payroll", icon: <RiMoneyDollarCircleLine size={22} /> },
  ],
};
