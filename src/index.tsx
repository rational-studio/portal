'use client';

import { createPortal } from 'react-dom';

import { useIsBrowser } from './utils/useIsBrowser';

interface PortalProps {
  target?: HTMLElement | null;
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ target, children }) => {
  const isBrowser = useIsBrowser();
  return isBrowser ? createPortal(children, target || document.body) : null;
};

export default Portal;
