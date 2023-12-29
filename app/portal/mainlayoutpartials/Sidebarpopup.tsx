import React,{ useState, useEffect, useRef, useLayoutEffect, forwardRef, ForwardedRef } from 'react'

interface SidebarpopupProps {
    top: number;
    isVisible: boolean;
    children: React.ReactNode;
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>,
    visibilityTimeout: React.MutableRefObject<NodeJS.Timeout | null>
    handleLeave: () => void
  }
  const Sidebarpopup = forwardRef(
    ({ top, isVisible, children,handleLeave, setPopupVisible, visibilityTimeout }: SidebarpopupProps, ref: ForwardedRef<HTMLDivElement>) => {
      const root = document.documentElement;
      const sbWidth = getComputedStyle(root).getPropertyValue('--sidebar-mini-width');
      return (
        <div
          onMouseOver={() => { clearTimeout(visibilityTimeout.current!); setPopupVisible(true) }}
          onMouseOut={() => handleLeave()}
          ref={ref}
          style={{
            position: "fixed",
            top,
            left: sbWidth ?? "6rem",
            zIndex: "70",
            display: isVisible ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      );
    }
  );
  
  export default Sidebarpopup