// FormSchema.ts
import * as z from 'zod';

export const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
});

export type FormValues = z.infer<typeof FormSchema>;