'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";


const ProfilePage = () => {
    const user = authClient.useSession()?.data?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = {
            name: formData.get('name'),
            image: formData.get('image')
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/updateUserData/${user?.id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const result = await res.json();
        toast.success('Profile Updated Successfully');
    };
    return (
        <div>
            <Card className='rounded-2xl hover:shadow-2xl shadow-cyan-400 py-5 md:py-10 lg:py-20 w-80 md:w-100 lg:w-160 mx-auto'>
                <Image className='rounded-[50%] w-20 h-20 flex mx-auto' src={user?.image}  alt="Profile Image" width={100} height={100} />
                <div>
                    <h2 className='text-2xl font-bold text-center mt-5'>{user?.name}</h2>
                    <p className='text-lg text-muted font-semibold text-center mt-2'>{user?.email}</p>
                    <div>
                        <Modal>
                            <Button className='flex mx-auto w-full rounded-2xl mt-6 bg-cyan-500 duration-300 hover:transition hover:bg-cyan-900 rounded-sm text-white'>Edit</Button>
                            <Modal.Backdrop>
                                <Modal.Container placement="auto">
                                    <Modal.Dialog className="sm:max-w-md">
                                        <Modal.CloseTrigger />
                                        <Modal.Header>
                                            <Modal.Heading className="text-xl font-bold">Update Profile</Modal.Heading>
                                            {/* <p className="mt-1.5 text-sm leading-5 text-muted">
                                                  Fill out the form below and we will get back to you. The modal adapts automatically
                                                  when the keyboard appears on mobile.
                                                </p> */}
                                        </Modal.Header>
                                        <Modal.Body className="p-6">
                                            <Surface variant="default">
                                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                                    <TextField className="w-full" name="name" type="text">
                                                        <Label>Name</Label>
                                                        <Input placeholder="Enter your name" />
                                                    </TextField>
                                                    <TextField className="w-full" name="image" type="text">
                                                        <Label>Image URL</Label>
                                                        <Input placeholder="Enter your image URL" />
                                                    </TextField>
                                                    <div className="mt-4 flex justify-end gap-2">
                                                        <Button slot="close" variant="secondary">
                                                            Cancel
                                                        </Button>
                                                        <Button type="submit" slot="close">Update</Button>
                                                    </div>
                                                </form>
                                            </Surface>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default ProfilePage;