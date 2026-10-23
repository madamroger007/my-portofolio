"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { cn } from "../../../lib/utils"
import { Textarea } from "../../../components/ui/textarea"
import CardSocialMedia from "../card/CardSocialMedia"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    email: z.string().email(),
    deskripsi: z.string().optional()
})
type Props = {
    className: string
}
function FormContactComponent({ className }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            deskripsi: ""

        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, email, deskripsi } = values;
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ADeskripsi: ${deskripsi}`;
        window.location.href = 'mailto:adamsetiadijr07@gmail.com?subject=Contact Form Submission&body=' + emailBody;
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("w-full", className)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
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
                                <Input placeholder="Your Email" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="deskripsi"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Textarea
                                    placeholder="Your input and suggestions"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                These are inputs and suggestions

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-wrap md:gap-0 gap-20 justify-center md:justify-between items-center mt-10">
                    <Button type="submit">Get in Touch</Button>
                    <CardSocialMedia />
                </div>
            </form>
        </Form>
    )
}
export default FormContactComponent
