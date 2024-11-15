import { A, type AnchorProps } from '@solidjs/router';
import type { Component } from 'solid-js';

import { getWebApp } from '@/utils/getWebApp.js';

import './Link.css';

export const Link: Component<AnchorProps> = (props) => {
  const onClick = (e: MouseEvent) => {
    // Compute if target path is external. In this case we would like to open link using
    // TMA method.
    const targetUrl = new URL(props.href, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    if (isExternal) {
      e.preventDefault();
      getWebApp().openLink(targetUrl.toString());
    }
  };

  return (
    <A
      {...props}
      onClick={onClick}
      class={[props.class, 'link'].filter(Boolean).join(' ')}
    />
  );
};
