import React from "react"
import heroImage from "../Images/hero-image.png"
import { Stack } from "@mui/material"

const Header: React.FC = () => {
  return (
    <Stack>
      <img
        src={heroImage}
        alt="Wakabu Main Banner"
        style={{ width: "100%", maxHeight: 250, objectFit: "cover" }}
      />
    </Stack>
  )
}

export default Header
