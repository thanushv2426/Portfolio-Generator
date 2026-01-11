
import { z } from 'zod';
export const experienceSchema = z.object({
    id: z.string().optional(),
    company: z.string().min(2, "Company name is required."),
    position: z.string().min(2, "Job title is required."),
    startDate: z.string().min(7, "Start date (YYYY-MM) is required.").regex(/^\d{4}-\d{2}$/, "Format must be YYYY-MM (e.g., 2020-09)."),
    endDate: z.string().optional().or(z.literal('Present')).or(z.literal('')).nullable(),
    description: z.string().min(10, "Job description (bullets) is required."),
});
export const experienceFormSchema = z.object({
    experience: z.array(experienceSchema),
});
export type ExperienceItem = z.infer<typeof experienceSchema>;