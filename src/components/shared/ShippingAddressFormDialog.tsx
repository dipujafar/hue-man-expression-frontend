"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CommonButton from "./common-button"
import { useCreatePaymentMutation } from "@/redux/api/paymentApi"
import { useRouter } from "next/navigation"
import { Error_Modal } from "@/modals/modals"
import LoadingSpin from "../ui/loading-spin"

// Zod validation schema
const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    phoneNumber: z
        .string()
        .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number"),
    streetAddress: z.string().min(5, "Street address must be at least 5 characters"),
    areaDistrict: z.string().min(2, "Area/District/Estate is required"),
    city: z.string().min(2, "City must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
    postalCode: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ShippingAddressFormDialog({ open, setOpen, packageData }: { open: boolean; setOpen: (open: boolean) => void; packageData: any }) {
    const [createPayment, { isLoading }] = useCreatePaymentMutation();
    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            streetAddress: "",
            areaDistrict: "",
            city: "",
            state: "",
            postalCode: "",
        },
    })

    async function onSubmit(values: FormValues) {
        console.log("Form submitted:", values, packageData);

        const formattedData = {
            package_name: packageData?.package_name,
            price: packageData?.price,
            web: true,
            address: {
                number: values?.phoneNumber,
                street_address: values?.streetAddress,
                area: values?.areaDistrict,
                city: values?.city,
                state: values?.state,
                postal_code: values?.postalCode
            }
        }

        try {
            const res = await createPayment(formattedData).unwrap();
            if (res?.data?.url) {
                router.push(res?.data?.url);
                form.reset()
            }
        } catch (error: any) {
            Error_Modal({ title: error?.data?.message });
        }


    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-xl max-h-screen overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Shipping Address</DialogTitle>
                    <DialogDescription>Please fill in your complete address details below.</DialogDescription>
                </DialogHeader>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone Number */}
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone number" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Street Address */}
                        <FormField
                            control={form.control}
                            name="streetAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Street Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your street address" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Area / District / Estate */}
                        <FormField
                            control={form.control}
                            name="areaDistrict"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Area / District / Estate</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your area/district/estate" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* City */}
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your city" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* State */}
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your state" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Postal Code */}
                        <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Postal Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your postal code" className="py-5 bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <CommonButton className="w-full mt-5 md:py-5 py-2 h-6">
                                Submit  {isLoading && <LoadingSpin />}
                            </CommonButton>
                        </div>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
