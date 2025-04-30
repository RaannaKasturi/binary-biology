"use client";

import { useForm } from "react-hook-form";
import { useId } from "react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

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
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }).includes(" ", {
            message: "Name must be a full name.",
        }),
        email: z.string().email({
            message: "Invalid email address.",
        }),
        phone: z.string().min(7, {
            message: "Phone number must be at least 10 digits.",
        }).regex(/^\+?\d{1,4}?\s?\d{6,12}$/, {
            message: "Invalid phone number format.",
        }),
        service: z.enum([
            "wd",
            "ad",
            "bd",
            "ba",
            "amd",
            "cw",
            "gd",
            "ot",
        ], {
            errorMap: () => ({ message: "Please select a service." }),
        }),
        orgname: z.string().optional(),
        projtitle: z.string().min(2, {
            message: "Project title must be at least 2 characters.",
        }),
        projdesc: z.string().min(10, {
            message: "Project description must be at least 10 characters.",
        }),
        budget: z.number().min(5000, {
            message: "Minimum Budget must be INR 5000.",
        }).max(1000000, {
            message: "Budget must be less than 10,00,000.",
        }),
        file: z.instanceof(File).optional().refine((file) => {
            if (!file) return true;
            const maxSize = 5 * 1024 * 1024;
            return file.size <= maxSize;
        }, {
            message: "File size must be less than 5MB.",
        }),
    })


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            orgname: "",
            service: undefined,
            projtitle: "",
            projdesc: "",
            budget: 5000,
            file: undefined,
        },
    });

    const id = useId();

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Form submitted:", data);
    };

    const resetForm = () => {
        form.reset();
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-8/12 md:w-4/12"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Nayan Kasturi" {...field} />
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="nayank@binarybiology.top" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number (With Country Code)</FormLabel>
                            <FormControl>
                                <Input placeholder="+91 XXXXX XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="orgname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Binary Biology or None" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Service</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Interested Service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="w-full h-52">
                                    {services.map((service) => (
                                        <SelectItem key={service.value} value={service.value}>
                                            {service.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projtitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Scientry" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projdesc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Description</FormLabel>
                            <FormControl>
                                <Textarea className="h-40" placeholder="Describe your project, platform, tech stack, etc. details" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Budget (in INR(₹))</FormLabel>
                            <FormControl>
                                <Input placeholder="Budget of project" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Attachments (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    id={id}
                                    className="ps-3 pe-3 file:me-3 file:border-0 file:border-e justify-center items-center content-center"
                                    type="file"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        field.onChange(file);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col items-center justify-center w-full pt-2">
                    <Button
                        variant={"outline"}
                        type="button"
                        className="w-full mt-2"
                        onClick={resetForm}
                    >
                        Reset
                    </Button>
                    <Button
                        variant={'default'}
                        type="submit"
                        className="w-full mt-2"
                        onClick={form.handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
}
