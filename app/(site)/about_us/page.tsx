import Section from '@/components/about_us/Section/Navbar'
import Section1 from '@/components/about_us/Section_1/Layout'
import Section2 from '@/components/about_us/Section_2/Layout'
import Section3 from '@/components/about_us/Section_3/Layout'
import Section4 from '@/components/about_us/Section_4/VisionMissionTabs'
import Section5 from '@/components/about_us/Section_5/WhatSetsUsApart'
import Section6 from '@/components/about_us/Section_6/Layout'
import Section7 from "@/components/about_us/Section_7/Layout"
import './globals.css'

export default function Home() {
  
  return (
    <>
      <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </>
  );
}
