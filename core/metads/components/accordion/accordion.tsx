import React, { useEffect, useState } from 'react';
import { MetaHeading } from '../../typography';
import { MetaButtonIcon } from '../button-icon';
import AccordionStyles from './accordion.styles';

type AccordionType = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  onChange?: (isOpened: boolean) => void;
};
export const MetaAccordion: React.FC<AccordionType> = ({
  children,
  title,
  onChange = () => {},
}) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    onChange(isOpened);
  }, [isOpened]);

  return (
    <AccordionStyles>
      <div
        className="d-flex noselect flex-fill justify-content-between align-items-center"
        onClick={() => setIsOpened(!isOpened)}
      >
        <MetaHeading size="XS">{title}</MetaHeading>
        <MetaButtonIcon icon="add" className={isOpened ? ' open' : ''} />
      </div>
      <div
        style={{ height: 0 }}
        ref={(node) => {
          if (node) {
            const child = node.childNodes[0]; //DIV
            if (!isOpened) {
              node.style.height = '0';
            } else {
              node.style.height = (child as HTMLElement).offsetHeight + 'px';
            }
          }
        }}
        className={'content'}
      >
        <div>
          {Array.isArray(children) ? (
            <>
              {children.map((child, index) => (
                <React.Fragment key={`accordion-child-${index}`}>
                  {child}
                </React.Fragment>
              ))}
            </>
          ) : (
            <>{children && children}</>
          )}
        </div>
      </div>
    </AccordionStyles>
  );
};
