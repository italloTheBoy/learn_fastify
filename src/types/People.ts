import { z } from "zod";

export const PeopleSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Valor invalido",
      required_error: "Campo obrigatório",
    })
    .toLowerCase(),

  age: z.number({
    invalid_type_error: "Valor invalido",
    required_error: "Campo obrigatório",
  }),

  message: z.string({
    invalid_type_error: "Valor invalido",
    required_error: "Campo obrigatório",
  }),
});

export type PeopleType = z.infer<typeof PeopleSchema>;
