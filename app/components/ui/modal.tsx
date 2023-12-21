import React from 'react';
import { Dialog, DialogContent } from "./partials/dialoguecomponents";
import IconifyIcon from './Iconsbutton';
import { Button } from '../form-components/button';
import SimpleBar from 'simplebar-react';

const variants = {
  "sm": "modal-sm",
  "md": "modal-md",
  "lg": "modal-lg",
  "xl": "modal-xl",
  "2xl": "modal-2xl",
  "full": "modal-full",
};

interface Imodal {
  open: boolean;
  closeModal: () => void;
  size?: keyof typeof variants;
  children?: React.ReactNode | React.JSX.Element;
  title?: string;
  showDivider?: boolean;
}

const Modal: React.FC<Imodal> = ({ title, children, closeModal, size = "md", open }) => {

  return (
    <Dialog open={open}>
      <DialogContent className={`md:rounded-lg overflow-hidden !box-border w-screen h-screen md:h-auto md:max-h-[calc(min(80vh,600px))]   fixed left-[50%]  bg-white top-[50%] z-50 grid space-x-0 space-y-0 !gap-0  translate-x-[-50%] translate-y-[-50%]  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  ${variants[size]}`} suppressHydrationWarning>
        <div className='relative h-full w-full'>
          <nav className='flex items-center justify-between border-b h-[3.5rem]'>
            <nav className='pl-3 text-sm my-auto'>{title}</nav>
            <IconifyIcon onClick={() => closeModal()} className='text-gray-700 mr-3 my-auto cursor-pointer' icon='iconamoon:close-light' />
          </nav>
          <SimpleBar className='!max-h-[calc(100vh-3.5rem)] w-full md:h-auto md:!max-h-[calc(min(80vh,600px)-3.5rem)]  border-none active:border-none active:outline outline-none focus:border-none focus:outline-none'>
            {children}
          </SimpleBar>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
