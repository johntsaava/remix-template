import type { ActionFunction } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

const User = z.object({
  name: z.string().min(1),
});

export const action: ActionFunction = async ({ request }) => {
  console.log({ formData: Object.fromEntries(await request.formData()) });

  return null;
};

export default function Login() {
  const submit = useSubmit();
  const form = useForm({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(User),
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    form.handleSubmit(() =>
      submit(event.target as HTMLFormElement, { replace: true })
    )(event);
  };

  return (
    <Form
      method="post"
      className="m-auto flex w-full max-w-lg flex-col gap-5 rounded-lg bg-white px-10 py-6 shadow-xl"
      onSubmit={onSubmit}
    >
      <h1 className="text-2xl">Login</h1>

      <label>
        <div>
          <span className="text-sm text-slate-500">Name</span>
        </div>
        <Input
          {...form.register("name")}
          width="full"
          state={form.formState.errors.name && "error"}
        />
        <div className="flex min-h-[24px] items-center">
          <span className="text-sm text-red-500">
            {form.formState.errors.name?.message}
          </span>
        </div>
      </label>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
