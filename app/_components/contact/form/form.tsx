"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import MyModal from "../../ui/modal";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const [loading , setLoading ] = useState(false)
  const router =useRouter()
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true)
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      
      if(res.ok){
        toast.success("email send succesfully");
      }else{
        toast.error("an error with nerwork, try again. ");
      }
      router.refresh()
    } catch (err) {
      toast.error("an error with nerwork, try again. ");
    }finally{ 
      
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  disabled={loading}
                  placeholder="user name"
                  {...field}
                  className="bg-slate-400/40 border-purple-400 border-1 p-2 text-white backdrop-blur-md rounded-lg w-full "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                disabled={loading}
                  placeholder="homs@gmail.com"
                  {...field}
                  className="bg-slate-400/40 border-purple-400 border-1 p-2 text-white backdrop-blur-md rounded-lg w-full "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                disabled={loading}
                  rows={6}
                  className="bg-slate-400/40 border-purple-400 border-1 p-2 text-white backdrop-blur-md rounded-lg w-full "
                  placeholder="write your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-purple-400" disabled={loading}>
          Submit
          {loading && <Loader2 className="animate-spin mx-1"/>}
        </Button>
        
      </form>
    </Form>
  );
}
