import { ZodError } from "zod";

export const formatZodErr = (err: ZodError) => {
  return err.errors.reduce(
    (acc: Record<string, string>, curr: ZodError["errors"][number]) => {
      const field = curr.path.join(".");
      acc[field] = curr.message;
      return acc;
    },
    {} as Record<string, string>
  );
};
