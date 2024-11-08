// control.ts

/**
 * values for riskReview: Acceptable risk | Residual risk | Unacceptable risk
 * values for status: Waiting | In progress | Done
 */

type Control = {
  id: number;
  projectId: number;
  status: string;
  approver: string;
  riskReview: string;
  owner: string;
  reviewer: string;
  dueDate: Date;
  implementationDetails: string;
};

export const controls: Control[] = [
  {
    id: 1,
    projectId: 1,
    status: "In progress",
    approver: "John Doe",
    riskReview: "Acceptable risk",
    owner: "Bob Johnson",
    reviewer: "Alice Williams",
    dueDate: new Date("2023-12-31"),
    implementationDetails: "Implement new feature",
  },
  {
    id: 2,
    projectId: 1,
    status: "Waiting",
    approver: "Sarah Lee",
    riskReview: "Residual risk",
    owner: "Emily Davis",
    reviewer: "David Wilson",
    dueDate: new Date("2024-06-30"),
    implementationDetails: "Update existing functionality",
  },
  {
    id: 3,
    projectId: 2,
    status: "Done",
    approver: "Lisa Taylor",
    riskReview: "Unacceptable risk",
    owner: "Samantha Flores",
    reviewer: "Alex Ramirez",
    dueDate: new Date("2025-03-31"),
    implementationDetails: "Migrate to new platform",
  },
  {
    id: 4,
    projectId: 2,
    status: "Done",
    approver: "Kevin Nguyen",
    riskReview: "Acceptable risk",
    owner: "Ethan Diaz",
    reviewer: "Sophia Morales",
    dueDate: new Date("2023-09-30"),
    implementationDetails: "Resolve bug issues",
  },
  {
    id: 5,
    projectId: 3,
    status: "In progress",
    approver: "Jessica Gonzalez",
    riskReview: "Residual risk",
    owner: "Mia Sanchez",
    reviewer: "Jose Gutierrez",
    dueDate: new Date("2024-12-31"),
    implementationDetails: "Enhance user experience",
  },
];
