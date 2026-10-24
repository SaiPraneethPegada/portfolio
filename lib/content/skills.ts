import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", featured: true },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "TanStack Query" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", featured: true },
      { name: "Pydantic" },
      { name: "REST APIs" },
      { name: "Server-Sent Events" },
    ],
  },
  {
    category: "AI / LLM",
    skills: [
      { name: "LangGraph", featured: true },
      { name: "Anthropic Claude", featured: true },
      { name: "AWS Bedrock", featured: true },
      { name: "OpenAI" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    category: "Cloud (AWS)",
    skills: [
      { name: "AWS Lambda", featured: true },
      { name: "ECS Fargate" },
      { name: "API Gateway" },
      { name: "DynamoDB" },
      { name: "S3" },
      { name: "SQS" },
      { name: "EventBridge" },
      { name: "Cognito" },
      { name: "CloudWatch" },
      { name: "RDS (PostgreSQL)" },
      { name: "CloudFormation / SAM" },
    ],
  },
  {
    category: "DevOps & Quality",
    skills: [
      { name: "GitHub Actions", featured: true },
      { name: "Git" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "HIPAA/PHI Compliance", featured: true },
      { name: "Code Review" },
      { name: "Release Management" },
    ],
  },
];
