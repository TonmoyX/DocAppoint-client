"use client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { toast } from "react-toastify";

const EditModal = ({data}) => {

 const {_id, email, doctorName, gender, phone, date, time } = data;

   const onSubmit = async (e) => {
           e.preventDefault();
           const formData = new FormData(e.currentTarget);
           const userData = Object.fromEntries(formData.entries())
           const res = await fetch(`http://localhost:8000/getPatientData/${_id}`, {
               method:'PATCH',
               headers:{'content-type':'application/json'},
               body: JSON.stringify(userData)
           })
           const data = await res.json()
           toast.success('Appointment Updated Successfully')
       }
       return (
           <div>
                <Modal>
         <Button className='mt-6 justify-end bg-cyan-500 duration-300 hover:transition hover:bg-cyan-900 rounded-sm text-white'>Edit</Button>
         <Modal.Backdrop>
           <Modal.Container placement="auto">
             <Modal.Dialog className="sm:max-w-md">
               <Modal.CloseTrigger />
               <Modal.Header>
                 <Modal.Heading className="text-xl font-bold">Update Patient Data</Modal.Heading>
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
                       <Input value={doctorName} placeholder="Enter the doctor's name" />
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

export default EditModal;