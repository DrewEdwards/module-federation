import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material"

const DedicatedAccount = dynamic(() => import("dedicated-account/Module"), {
  ssr: true
});

export default function DedicatedAccountPage() {
  return (
    <Box border="2px dashed blue">
      <DedicatedAccount />
      <Typography>SOME MORE INFO ON Dedicated Accounts</Typography>
    </Box>
  )
}