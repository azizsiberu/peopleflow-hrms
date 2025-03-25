const demoUsers = [
  { username: "superadmin", role: "SuperAdmin", password: "admin123" }, // Full access, manage users & system
  { username: "executive", role: "Executive", password: "exec123" }, // View company reports
  { username: "manager", role: "Manager", password: "mgr123" }, // Manage employees, approve leave/overtime
  { username: "supervisor", role: "Supervisor", password: "sup123" }, // Monitor team, input assessments
  { username: "karyawan", role: "Employee", password: "emp123" }, // Attendance, request leave, view payslip
];

export default demoUsers;
