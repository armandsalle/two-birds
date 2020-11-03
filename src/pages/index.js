import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Process from "../components/process"
import ProjectsList from "../components/projectsList"
import Trust from "../components/trust"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  const projects = [
    { id: 1, title: "Apple", desc: "branding, design, development, product" },
    {
      id: 2,
      title: "Doctolib",
      desc: "branding, design, development, product",
    },
    { id: 3, title: ":86400", desc: "branding, design, development, product" },
    { id: 4, title: "Orange", desc: "branding, design, development, product" },
    {
      id: 5,
      title: "MyHousing",
      desc: "branding, design, development, product",
    },
    { id: 6, title: "Seekube", desc: "branding, design, development, product" },
  ]

  const processes = [
    {
      id: 1,
      title: "Strategy",
      desc:
        "We take the time to ask the right questions from the start. Failing products find their answers here.",
      items: [
        "Product strategy",
        "Existing product audit",
        "Design workshops",
        "User research",
        "Service Design",
        "Design thinking",
      ],
    },
    {
      id: 2,
      title: "Branding",
      desc:
        "We create identities to help brands win their users hearts, giving them a head start on their competition.",
      items: [
        "Brand identity",
        "Logo",
        "Photo/Video",
        "Motion",
        "Illustrations",
        "Print design",
      ],
    },
    {
      id: 3,
      title: "Production",
      desc:
        "Creating simple and intuitive products is our bread and butter, crafting satisfying experiences is our motivation.",
      items: [
        " UX/UI",
        "Responsive",
        "Production assets",
        "Design system",
        "Web development",
        "iOS and Android development",
        "Custom development (React native etc.)",
      ],
    },
  ]

  return (
    <>
      <Header />
      <Hero />
      <ProjectsList projects={projects} />
      <Process process={processes} />
      <Trust />
      <Contact />
      <Footer />
    </>
  )
}
