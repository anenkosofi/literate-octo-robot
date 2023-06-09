import { z } from 'zod';

export const schema = z.object({
  firstName: z.string().nonempty('This field is required.'),
  lastName: z.string().optional(),
  emailName: z
    .string()
    .nonempty('This field is required')
    .email('Invalid email format.'),
  phoneName: z
    .string()
    .nonempty('This field is required.')
    .regex(/^\d+$/, 'Phone number must contain only numbers.')
    .min(5, 'Phone number must contain at least 5 numbers.')
    .max(12, 'Phone number must contain at most 12 numbers.'),
  countryName: z.string().nonempty('This field is required.'),
  cityName: z.string().optional(),
  apartmentName: z.string().nonempty('This field is required.'),
  zipName: z
    .string()
    .regex(/^\d+$/, 'ZIP code can only contain numbers.')
    .min(5, 'Zip code must contain at least 5 numbers.')
    .max(10, 'Zip code must contain at most 10 numbers.')
    .refine(value => /^\d+$/.test(value), {
      message: 'ZIP code can only contain numbers',
    }),
  notes: z.string().optional(),
  sending: z.boolean().refine(value => value, {
    message: 'This field must be checked.',
  }),
  agreement: z.boolean().refine(value => value, {
    message: 'This field must be checked.',
  }),
});
