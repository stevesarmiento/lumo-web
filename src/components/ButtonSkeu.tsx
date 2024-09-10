import React, { FunctionComponent, memo } from 'react';

interface ButtonProps {
  className?: string
  children: React.ReactNode
}

const ButtonSkeu: FunctionComponent<ButtonProps> = memo(({ children, className, ...props }) => {
  return (
    <>
      <div className="text-white text-opacity-90 font-body hover:text-opacity-100">
        <button
          className={`${className} overflow-hidden flex z-10 w-full justify-center text-center items-center main-btn`}
          {...props}
        >
          <p className="font-semibold">{children}</p>
        </button>
      </div>
    </>
  );
});

ButtonSkeu.displayName = 'ButtonSkeu';
export default ButtonSkeu;
