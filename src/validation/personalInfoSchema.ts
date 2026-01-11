// src/validation/personalInfoSchema.ts
import { z } from 'zod';

export const personalInfoSchema = z.object({
    fullName: z.string().min(3, "Full Name is required and must be at least 3 characters."),
    title: z.string().min(5, "Title (e.g., 'Software Developer') is required."),
    email: z.string().email("Invalid email format."),
    phone: z.string().optional(), // Optional field
    linkedin: z.string().url("Must be a valid URL.").optional().or(z.literal('')), // Allows empty string or URL
    github: z.string().url("Must be a valid URL.").optional().or(z.literal('')),   // Allows empty string or URL
});

// Infer the TypeScript type from the schema for use in the component
export type PersonalInfoForm = z.infer<typeof personalInfoSchema>;