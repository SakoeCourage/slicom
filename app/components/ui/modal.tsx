import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "./partials/dialoguecomponents"



function modal() {
  return <Dialog  open={true}>
    <DialogContent  >
      <DialogHeader>
        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
}

export default modal