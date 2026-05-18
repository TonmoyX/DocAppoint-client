import Banner from "@/component/Banner";
import Chosse from "@/component/Chosse";
import PatientCard from "@/component/PatientCard";
import TopDoctor from "@/component/TopDoctor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TopDoctor></TopDoctor>
      <Chosse></Chosse>
      <PatientCard></PatientCard>
    </div>
  );
}
