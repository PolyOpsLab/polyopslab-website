"use client";

import { GlobeDemo } from "@/components/globe-demo";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon } from "lucide-react";
import axios from "axios";
import { LoaderOne } from "@/components/ui/loader";
import { useRouter } from "next/navigation";

export default function page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("/api/send", {
        fullname,
        email,
        subject,
        message,
      });
      router.replace("/succeeded?from=contact");
      // setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoaderOne />
      </div>
    );
  }

  return (
    <section className="py-32 h-screen relative">
      <div className="absolute top-4 left-4">
        <Button
          variant={"outline"}
          className="cursor-pointer flex justify-between gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-10 w-10" />
          Back
        </Button>
      </div>

      <div className="">
        <div className="flex max-w-7xl mx-auto flex-col justify-between items-center gap-2 lg:flex-row lg:gap-20">
          <div className="mx-auto max-w-xl hidden lg:block">
            <GlobeDemo />
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-[90%] md:w-[60%] lg:w-[35%] flex-col gap-6 rounded-lg border p-10 h-full max-w-3xl"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Full Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="resize-none overflow-y-auto h-32"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
