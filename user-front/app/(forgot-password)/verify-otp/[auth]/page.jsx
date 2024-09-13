"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

const VerifyOTP = () => {
  const params = useParams();

  const { toast } = useToast();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const formSchema = z.object({
    code: z.string().min(5, {
      message: `${error ? error : "Verification OTP must be 5 characters."}`,
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // setLoader(true);
    // try {
    //   const response = await axios.post("/api/sign-up", data);
    //   if (response.status === 200 || response?.data?.user) {
    //     form.reset();
    //     setLoader(false);
    //   }

    //   setLoader(false);
    // } catch (error) {
    //   toast({
    //     title: "Failed to sign up",
    //     description: error?.response?.data?.error,
    //     variant: "destructive",
    //   });
    //   setLoader(false);
    // }
  };
  return (
    <div
      className="py-5 flex justify-center items-center"
      style={{ height: "calc(100vh - 86px)" }}
    >
      <Card className={cn("w-[95%] sm:w-[480px] h-fit")}>
        {/* <CardHeader>
          <CardTitle>Verification</CardTitle>
        </CardHeader> */}
        <CardContent className="pt-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 flex flex-col items-center"
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel>Please enter your OTP</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={5} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      OTP has been sent to {decodeURIComponent(params?.auth)}
                    </FormDescription>
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
                  "Verify"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTP;
