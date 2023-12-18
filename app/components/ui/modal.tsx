import React from 'react'
import { Dialog, DialogContent } from "./partials/dialoguecomponents"
import IconifyIcon from './Iconsbutton';
import SimpleBar from 'simplebar-react';
import { Button } from '../form-components/button';
const variants = {
  "sm": "modal-sm",
  "md": "modal-md",
  "lg": "modal-lg",
  "xl": "modal-xl",
  "2xl": "modal-2xl",
  "full": "moda-full",
};


interface Imodal {
  open: boolean;
  closeModal: () => void;
  onConfirm?: () => void;
  size?: keyof typeof variants;
  children?: React.ReactNode | React.JSX.Element;
  title?: string;
  showDivider?: boolean;
}

const modal: React.FC<Imodal> = ({ title, children, closeModal, onConfirm, size = "md", open }) => {
  return <Dialog open={open}  >
    <DialogContent className={`!bg-white h-screen md:!max-h-[calc(min(80%,600px))] md:h-max  my-auto ${variants[size]}`} suppressHydrationWarning  >
      <nav className=' flex items-center justify-between  border-b h-[3.5rem] w-full'>
        <nav className='pl-3 text-sm my-auto'>
          {title}
        </nav>
        <IconifyIcon onClick={() => closeModal()} className='text-gray-700 mr-3 my-auto cursor-pointer' icon='iconamoon:close-light' />
      </nav>
      <SimpleBar className='w-full border-none active:border-none active:outline outline-none focus:border-none  focus:outline-none'>
        {children}
      </SimpleBar>
      {/* Modal footer */}
      <nav className='w-full flex items-center gap-2 p-4 justify-end h-14 mt-auto bg-orange-50/50'>
        <Button size='sm' className='' variant="outline">
          Cancel
        </Button>
        <Button size='sm' className='' variant="primary">
          Ok
        </Button>
      </nav>
    </DialogContent>
  </Dialog>
}

export default modal