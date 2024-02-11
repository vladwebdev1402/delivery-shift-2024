import { ComponentProps, FC, useEffect, useRef } from 'react';

import Cross from '@/shared/assets/cross.svg?react';

import { Button } from '..';
import st from './Modal.module.scss';

interface ModalProps extends ComponentProps<'div'> {
  onClose: () => void;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  title = '',
  onClose,
  children,
  className = '',
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const modal = modalRef.current;
    const modalBody = bodyRef.current;

    if (
      modal &&
      body &&
      modalBody &&
      modalBody.clientHeight > body.clientHeight
    ) {
      modal.classList.add(st.modal_start);
    } else if (modal) {
      modal.classList.remove(st.modal_start);
      modal.classList.add(st.modal_center);
    }
    body.className += ' block_scroll';

    return () => {
      body.className = body.className.replace(' block_scroll', '');
    };
  }, []);

  const clickBody = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={st.modal} onClick={onClose} {...props} ref={modalRef}>
      <div
        className={`${className} ${st.modal__body}`}
        onClick={clickBody}
        ref={bodyRef}>
        <Button
          variant="text"
          StartIcon={<Cross />}
          className={st.modal__close}
          onClick={onClose}></Button>
        <h2 className={st.modal__title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
