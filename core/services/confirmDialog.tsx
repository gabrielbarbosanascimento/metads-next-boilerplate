import React, { useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { MetaButton, MetaObscurator } from '../metads/components';
import { MetaSubtitle } from '../metads/typography';
import ModalStyled from '../metads/components/modal/modal.styles';
import { AnimatePresence } from 'framer-motion';

type ConfirmDialogType = {
  title?: string;
  message?: string;
  resolve: (reason: any) => void;
  reject: (reason: any) => void;
  unmount: () => void;
};

export const ConfirmDialogResponse = {
  SUCCESS: 'SUCCESS',
  REJECT: 'REJECT',
};

const ConfirmDialogComponent: React.FC<ConfirmDialogType> = ({
  title = 'Confirmar ação',
  message = 'Deseja confirmar essa ação?',
  resolve,
  reject,
  unmount,
}) => {
  const [show, setShow] = useState(true);

  function removeDialogFromDOM() {
    const div = document.querySelectorAll('#confirm-dialog-container');
    const body = document.querySelector('body');
    if (!body) return;
    if (!div) return;
    unmount();
    div.forEach((container) => {
      body.removeChild(container);
    });
  }

  function confirmar() {
    dismiss(() => {
      resolve(ConfirmDialogResponse.SUCCESS);
      removeDialogFromDOM();
    });
  }

  function cancelar() {
    dismiss(() => {
      reject(ConfirmDialogResponse.REJECT);
      removeDialogFromDOM();
    });
  }

  function dismiss(fc: Function) {
    setShow(false);
    setTimeout(() => fc(), 300);
  }

  return (
    <MetaObscurator className="d-flex align-items-center justify-content-center">
      <AnimatePresence>
        {show && (
          <ModalStyled
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="confirm-dialog"
          >
            <header>
              <MetaSubtitle size="SM">{title}</MetaSubtitle>
            </header>
            <div className="content">{message}</div>
            <footer>
              <div className="d-flex justify-content-between">
                <MetaButton onClick={() => cancelar()}>Cancelar</MetaButton>
                <MetaButton className="primary" onClick={() => confirmar()}>
                  Confirmar
                </MetaButton>
              </div>
            </footer>
          </ModalStyled>
        )}
      </AnimatePresence>
    </MetaObscurator>
  );
};

type ConfirmDialogShowProps = {
  title?: string;
  message?: string;
};

export class ConfirmDialogService {
  static show({ title, message }: ConfirmDialogShowProps) {
    return new Promise((resolve, reject) => {
      const confirmDialogContainer = document.querySelector(
        '#confirm-dialog-container'
      );
      if (confirmDialogContainer) return;

      const body = document.querySelector('body');
      const div = document.createElement('div');
      div.setAttribute('id', 'confirm-dialog-container');

      if (!body) return;
      body.appendChild(div);

      const confirmDialogRoot: Root = createRoot(div);

      confirmDialogRoot.render(
        <ConfirmDialogComponent
          title={title}
          message={message}
          resolve={resolve}
          reject={reject}
          unmount={() => confirmDialogRoot.unmount()}
        />
      );
    });
  }
}
