"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlobeDemo } from "@/components/globe-demo";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

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
        <div className="flex max-w-7xl mx-auto flex-col justify-between gap-2 lg:flex-row lg:gap-20">
          <div className="mx-auto max-w-lg hidden lg:block">
            <GlobeDemo />
          </div>

          <div className="mx-auto flex w-[90%] md:w-[60%] lg:w-[35%] flex-col gap-6 rounded-lg border p-10 h-full">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Full Name</Label>
                <Input type="text" id="firstname" placeholder="Full Name" />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="resize-none overflow-y-auto h-32"
              />
            </div>

            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
