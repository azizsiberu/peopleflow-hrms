import { Role } from "./role";
import { Link } from "react-router-dom";

export const menuItemsByRole = {
  [Role.SuperAdmin]: [
    { label: "Manajemen Karyawan", path: "/employee-management" },
    { label: "Rekrutmen & Onboarding", path: "/recruitment" },
    { label: "Absensi & Kehadiran", path: "/attendance" },
    { label: "Pengelolaan Cuti & Izin", path: "/leave-management" },
    { label: "Payroll & Gaji", path: "/payroll" },
    { label: "Penilaian Kinerja", path: "/performance-evaluation" },
    { label: "Pelatihan & Pengembangan", path: "/training" },
    { label: "Manajemen Benefit", path: "/benefits" },
    { label: "Laporan & Analitik HR", path: "/hr-reports" },
    { label: "Employee Self-Service", path: "/ess" },
    { label: "Compliance & Legal HR", path: "/compliance" },
  ],
  [Role.Executive]: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Laporan & Analitik HR", path: "/hr-reports" },
  ],
  [Role.Manager]: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Manajemen Karyawan", path: "/employee-management" },
    { label: "Absensi & Kehadiran", path: "/attendance" },
    { label: "Pengelolaan Cuti & Izin", path: "/leave-management" },
  ],
  [Role.Supervisor]: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Absensi & Kehadiran", path: "/attendance" },
  ],
  [Role.Employee]: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Absensi & Kehadiran", path: "/my-attendance" },
    { label: "Pengajuan Cuti", path: "/my-leave-request" },
    { label: "Slip Gaji", path: "/my-payroll" },
  ],
};
