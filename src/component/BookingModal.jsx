"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
const BookingModal = ({doctorData}) => {
    const {name} = doctorData
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())

        const res = await fetch(`http://localhost:8000/addPatientData`, {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(userData)
        })
        const data = await res.json()
    }



    return (
        <div>
             <Modal>
      <Button className='mt-6 justify-end bg-cyan-500 duration-300 hover:transition hover:bg-cyan-900 text-white'>Book Appointment</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              {/* <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p> */}
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="doctorName" type="text">
                    <Label>Doctor Name</Label>
                    <Input value={name} placeholder="Enter the doctor's name" />
                  </TextField>
                  <TextField className="w-full" name="gender" type="text">
                    <Label>Gender</Label>
                    <Input placeholder="Enter your gender" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="date" type="date">
                    <Label>Appointment Date</Label>
                    <Input placeholder="Enter the date" />
                  </TextField>
                  <TextField className="w-full" name="time" type="time">
                    <Label>Appointment Time</Label>
                    <Input placeholder="Enter the time" />
                  </TextField>
                  <div className="mt-4 flex justify-end gap-2">
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Submit</Button>
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
    );
};

export default BookingModal;