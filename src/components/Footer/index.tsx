import React from 'react';

import { Container } from '@components/Container';
import { FooterLinks } from '@components/FooterLinks';
import { Tags } from '@components/Tags';
import { Copyright } from '@components/Copyright';

import {
  touchItems,
  connectionItems,
  earningItems,
  accountItems,
} from '@constants';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__navigation">
          <FooterLinks title="Get in touch" array={touchItems} />
          <FooterLinks title="Connections" array={connectionItems} />
          <FooterLinks title="Earnings" array={earningItems} />
          <FooterLinks title="Account" array={accountItems} />
        </div>
        <Tags />
        <Copyright />
      </Container>
    </footer>
  );
};
