// project.model.ts

export type Project = {
  id: number;
  project_title: string;
  owner: string;
  users: number[]; // List of user IDs as integers
  start_date: Date;
  ai_risk_classification: "high risk" | "limited risk" | "minimal risk";
  type_of_high_risk_role:
    | "deployer"
    | "provider"
    | "distributor"
    | "importer"
    | "product manufacturer"
    | "authorized representative";
  goal: string;
  last_updated: Date;
  last_updated_by: string;
};