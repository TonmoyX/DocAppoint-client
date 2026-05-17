import Banner from "@/component/Banner";
import Chosse from "@/component/Chosse";
import PatientCard from "@/component/PatientCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Chosse></Chosse>
      <PatientCard></PatientCard>
    </div>
  );
}
