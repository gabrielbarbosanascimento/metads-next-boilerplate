import React, { useEffect, useRef, useState } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { MetaButton } from '../button';
import { MetaButtonIcon } from '../button-icon';
import DropDownStyles from './drop-down.styles';

type DropDownType = {
  children: React.ReactNode | Array<React.ReactNode>;
  icon?: string;
  label?: string;
};

export const MetaDropDown: React.FC<DropDownType> = ({
  children,
  icon = 'more_vert',
  label,
}) => {
  const [popper, setPopper] = useState<null | Instance>(null);
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (buttonRef.current && menuRef.current) {
      const popperInstance = createPopper(buttonRef.current, menuRef.current, {
        placement: 'bottom-end',
      });
      setPopper(popperInstance);
    }
  }, []);

  useEffect(() => {
    if (popper) {
      function showMenu() {
        menuRef.current?.setAttribute('data-show', '');
        popper?.update();
      }

      function hide() {
        menuRef.current?.removeAttribute('data-show');
      }

      function clickTarget(event: Event) {
        const target = event.target as Node;
        let isClickInside = buttonRef.current?.contains(target);
        setShow(!!isClickInside);
      }

      show ? showMenu() : hide();

      document.addEventListener('click', clickTarget);
      return () => document.removeEventListener('click', clickTarget);
    }
  }, [popper, show]);

  return (
    <>
      {label ? (
        <div
          style={{ display: 'inline' }}
          ref={(node) => {
            if (node) {
              buttonRef.current = node;
            }
          }}
        >
          <MetaButton borders
          >
            {label}
          </MetaButton>
        </div>
      ) : (
        <div
          style={{ display: 'inline' }}
          ref={(node) => {
            if (node) {
              buttonRef.current = node;
            }
          }}
        >
          <MetaButtonIcon icon={icon} />
        </div>
      )}
      <DropDownStyles
        ref={(node) => {
          if (node) {
            menuRef.current = node;
          }
        }}
        role="tooltip"
      >
        {Array.isArray(children) &&
          children.map((child, index) => (
            <React.Fragment key={`dropdown-child-${index}`}>
              {child}
            </React.Fragment>
          ))}
        {!Array.isArray(children) && <>{children}</>}
      </DropDownStyles>
    </>
  );
};
