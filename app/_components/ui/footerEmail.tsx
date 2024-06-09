"use client";
import { useState } from "react";
import WordWriter from "../../../utilities/wordWriter";
import MyModal from "./modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

function LeaveYourEmail() {
  const word = ["Dear🙌", "Coach 🖐️", "Boss ✋"];
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const FormSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("email send succesfully");
      } else {
        toast.error("an error with nerwork, try again. ");
      }
    } catch (err) {
      toast.error("an error with nerwork, try again. ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{ transform: "translateY(-50%)", borderRadius: "25px" }}
      className=" p-3  bg-dark text-dark  text-capitalize flex-wrap d-flex justify-content-center align-items-center gap-3"
    >
      <h3 className="col-xs-12 col-lg-4 wrap p-3 text-white">
        see my project at once & leave here your e-mail address ,
        <WordWriter
          word={word}
          text={text}
          setText={setText}
          className={"inline"}
        />
      </h3>
      <div className="col-xs-12 col-lg-4 w-full ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-1 space-y-6 relative"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="outlined-basic"
                      disabled={loading}
                      className="  border-2 p-4 text-white  w-full"
                      {...field}
                      style={{ padding: "14px" }}
                      placeholder="email adress"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              disabled={loading}
              className="btn ps-4 pe-4  text-light  end-0   absolute -top-4  me-2 p-2  "
              type="submit"
              value="send"
              style={{
                background: "linear-gradient( to right,#973489,#5f30ae )",
              }}
            >
              submit
              {loading && <Loader2 className="animate-spin mx-1" />}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
export default LeaveYourEmail;
