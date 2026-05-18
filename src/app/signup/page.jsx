"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import { IoLogoGoogle } from "react-icons/io";

const SignUp = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        //  console.log(userData)

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            image: userData.image,
            email: userData.email,
            password: userData.password,
        });
        if (data?.user) {
            // toast.success("SignUp Successfully..!!!")
            redirect(`/login`, RedirectType.push)
        }
        // console.log(data, error)

    }
    const googleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        redirect(`/`, RedirectType.push)
        console.log(data, error)
    }
    return (
        <div className='mx-auto justify-center mt-10 pb-10'>
            <Card className="py-10 bg-cyan-200">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text">
                        <Label className="text-2xl mb-4">Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                // return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-2xl mb-4">Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text">
                        <Label className="text-2xl mb-4">Image Url</Label>
                        <Input placeholder="Enter image url" />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            // if (!/[]/.test(value)) {
                            //     return "Password must contain at least one number";
                            // }
                            return null;
                        }}
                    >
                        <Label className="text-2xl mb-4">Password</Label>
                        <Input placeholder="Enter your password" />
                        {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            Sign Up
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <p className="text-center font-bold text-2xl">--------- or ---------</p>
                    <Button className="items-center gap-2 bg-cyan-700  text-xl text-white rounded-2xl w-full" onClick={googleLogin}>
                        <IoLogoGoogle />
                        Login with google
                    </Button>
                    <p className='text-center text-lg'>Already have an account ? <Link href={'/login'}><span className='text-blue-600'>Login</span></Link></p>
                </Form>
            </Card>
        </div>
    );
};

export default SignUp;