"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { isEmail, isPhoneNumber } from "@/utils/validate";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  auth: z.string().refine((val) => isPhoneNumber(val) || isEmail(val), {
    message: "Invalid email or phone number.",
  }),
});

const ForgotPassword = () => {
  const { toast } = useToast();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      auth: "",
    },
  });

  const onSubmit = async (data) => {
    setLoader(true);
    try {
      const response = await axios.post("/api/sign-up", data);
      if (response.status === 200 || response?.data?.user) {
        form.reset();
        setLoader(false);
        const encodedAuth = encodeURIComponent(data.auth);
        encodedAuth && router.replace(`/verify/${encodedAuth}`);
      }

      setLoader(false);
    } catch (error) {
      toast({
        title: "Failed to sign up",
        description: error?.response?.data?.error,
        variant: "destructive",
      });
      setLoader(false);
    }
  };
  return (
    <div
      className="py-5 flex justify-center items-center h-screen"
      style={{ height: "calc(100vh - 86px)" }}
    >
      <Card className={cn("w-[95%] sm:w-[480px]")}>
        <CardContent className="pt-7">
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-1 sm:space-y-2"
            >
              <FormField
                control={form.control}
                name="auth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${
                        loader && "cursor-not-allowed text-gray-400"
                      }`}
                    >
                      Your Email or Phone number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loader} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loader}>
                {loader ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
