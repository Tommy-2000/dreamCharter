import z from 'zod';

export enum UserRole {
  SEEKER,
  CHARTER
}

export enum UserType {
  STUDENT,
  APPRENTICE,
  GRADUATE
}

export interface User {
  userId: number;
  userProfileImage: string;
  userFirstName: string;
  userLastName: string;
  userPronouns: string;
  userDateOfBirth: string;
  userRole: UserRole;
  userType: UserType;
}

export enum OpportunityType {
  GRADUATE_SCHEME,
  STUDENT_PLACEMENT,
  APPRENTICESHIP,
  WORK_EXPERIENCE
}

export interface Opportunity {
  id: string;
  opportunityTitle: string;
  opportunityDescription: string;
  opportunityType: OpportunityType;
  salary: number;
  datePosted: string;
  dateUpdated: string;
  company: string;
  recruiter: string;
}

export const userSchema = z.object({
  userId: z.number(),
  userProfileImage: z.string(),
  userFirstName: z.string(),
  userLastName: z.string(),
  userPronouns: z.string(),
  userDateOfBirth: z.string(),
  userRole: z.enum(UserRole),
  userType: z.enum(UserType)
});

export const opportunitySchema = z.object({
  opportunityId: z.number(),
  opportunityTitle: z.string(),
  opportunityDescription: z.string(),
  opportunityType: z.enum(OpportunityType),
  salary: z.number(),
  datePosted: z.string(),
  dateUpdated: z.string(),
  company: z.string(),
  recruiter: z.string()
});
