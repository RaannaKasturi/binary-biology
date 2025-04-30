"use client";

import React, { useId, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const services = [
    { label: "Website Development", value: "wd" },
    { label: "App Development", value: "ad" },
    { label: "Backend Development", value: "bd" },
    { label: "Bioinformatical Analysis", value: "ba" },
    { label: "AI & ML Development", value: "amd" },
    { label: "Content Writing", value: "cw" },
    { label: "Graphics Designing", value: "gd" },
    { label: "Other", value: "ot" },
];

export default function CCForm() {
    const [state, handleSubmit] = useForm("mpwdqkkj");
    const [agreed, setAgreed] = useState(false);
    const id = useId();

    if (state.succeeded) {
        return (
            <div className="flex flex-col gap-4 w-11/12 md:w-6/12 mx-auto py-8">
                <h1 className="text-2xl font-bold text-center">Thank You!</h1>
                <p className="text-green-600 text-center text-lg">
                    Your response has been submitted successfully!<br />
                    Please sit back and relax.<br />
                    We'll contact you in a while!
                </p>
                <br />
                <p className="text-center text-muted-foreground text-lg">
                    If you have any questions, please mail us at{" "}<br />
                    <Link target={"_blank"} rel={"noreferrer nofollow"} href="mailto:contact@binarybiology.top" className="text-blue-500 text-lg underline">
                        contact@binarybiology.top
                    </Link>
                </p >
            </div >
        );
    }
    if (state.errors) {
        return (
            <div className="flex flex-col gap-4 w-11/12 md:w-6/12 mx-auto py-8">
                <h1 className="text-2xl font-bold text-center">Thank You!</h1>
                <p className="text-red-600 text-center text-lg">
                    Your response couldn't been submitted!<br />
                    Please mail us your details at{" "}<br />
                    <Link target={"_blank"} rel={"noreferrer nofollow"} href="mailto:contact@binarybiology.top" className="text-blue-500 text-lg underline">
                        contact@binarybiology.top
                    </Link><br />
                    While we fix the issue!<br />
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 w-11/12 md:w-6/12 mx-auto mb-20"
            encType="multipart/form-data"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name">&nbsp;&nbsp;Full Name</label>
                <Input id="name" name="name" placeholder="Nayan Kasturi" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email">&nbsp;&nbsp;Email Address</label>
                <Input id="email" type="email" name="email" placeholder="email@example.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phone">&nbsp;&nbsp;Phone Number (With Country Code)</label>
                <Input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="orgname">&nbsp;&nbsp;Organization Name</label>
                <Input id="orgname" name="orgname" placeholder="Binary Biology or None" />
                <ValidationError prefix="OrgName" field="orgname" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="service">&nbsp;&nbsp;Service</label>
                <Select name="service" required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Interested Service" />
                    </SelectTrigger>
                    <SelectContent>
                        {services.map((s) => (
                            <SelectItem key={s.value} value={s.label}>
                                {s.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="projtitle">&nbsp;&nbsp;Project Title</label>
                <Input id="projtitle" name="projtitle" placeholder="Scientry" required />
                <ValidationError prefix="Title" field="projtitle" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="projdesc">&nbsp;&nbsp;Project Description</label>
                <Textarea
                    id="projdesc"
                    name="projdesc"
                    className="h-40"
                    placeholder="Describe your project, platform, tech stack, etc."
                    required
                />
                <ValidationError prefix="Description" field="projdesc" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="budget">&nbsp;&nbsp;Budget (in INR ₹)</label>
                <Input id="budget" name="budget" type="number" min={5000} max={1000000} required />
                <ValidationError prefix="Budget" field="budget" errors={state.errors} />
            </div>

            <div className="flex items-start space-x-2">
                <input
                    id="agree"
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="mt-1.5"
                    required
                />
                <label htmlFor="agree">
                    I on behalf of Myself and/or My Organization have submitted this form and allow Binary Biology and/or Nayan Kasturi to contact me.
                </label>
                <ValidationError prefix="Agree" field="agree" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2 pt-2">
                <Button
                    type="submit"
                    variant={state.submitting ? "secondary" : "default"}
                    disabled={state.submitting}
                    aria-busy={state.submitting}
                    className={`w-full ${state.submitting ? " animate-pulse" : ""}`}
                >
                    Submit
                </Button>
                {/* <Button
                    type="reset"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                        document.querySelector("form")?.reset();
                    }}
                >
                    Reset
                </Button> */}
            </div>
        </form>
    );
}
