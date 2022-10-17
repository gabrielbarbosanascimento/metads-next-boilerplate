import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MetaSubtitle } from '../../typography';
import { MetaButtonIcon, MetaObscurator } from '../';
import ModalStyled from './modal.styles';
import { AnimatePresence } from 'framer-motion';

type ModalType = {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onClose: () => void;
};

export default function Modal({
  title,
  children,
  onClose = () => {},
  className = '',
}: ModalType) {
  const [show, setShow] = useState(true);

  function dismiss() {
    setShow(false);
    setTimeout(() => onClose(), 300);
  }

  return ReactDOM.createPortal(
    <MetaObscurator className="d-flex align-items-center justify-content-center">
      <AnimatePresence>
        {show && (
          <ModalStyled
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={className.length ? ` ${className}` : ''}
          >
            <header>
              <MetaSubtitle size="SM">{title}</MetaSubtitle>
              <MetaButtonIcon icon="close" onClick={dismiss} />
            </header>
            <div className="content">
              {Array.isArray(children) ? children[0] : children}
            </div>
            {Array.isArray(children) && children[1] && (
              <footer>{children[1]}</footer>
            )}
          </ModalStyled>
        )}
      </AnimatePresence>
    </MetaObscurator>,
    document.body
  );
}
