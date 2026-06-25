import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
