
import { z } from 'zod';
export const educationSchema = z.object({
    id: z.string().optional(),
    institution: z.string().min(2, "Institution name is required."),
    degree: z.string().min(2, "Degree/Course title is required."),
    city: z.string().min(2, "City is required."),
    graduationDate: z.string().min(7, "Graduation date (YYYY-MM) is required.").regex(/^\d{4}-\d{2}$/, "Format must be YYYY-MM (e.g., 2024-05)."),
});
export const educationFormSchema = z.object({
    education: z.array(educationSchema),
});
export type EducationItem = z.infer<typeof educationSchema>;