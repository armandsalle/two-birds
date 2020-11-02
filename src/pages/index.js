import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import ProjectsList from "../components/projectsList"

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
  return (
    <>
      <Header />
      <Hero />
      <ProjectsList projects={projects} />
    </>
  )
}
