import { Classes, Colors, Label } from '@blueprintjs/core';
import * as React from 'react';

export const Errorcito = (props: { error?: string; style?: object }) =>
  props.error ? (
    <div
      className={[Classes.TEXT_SMALL, Classes.TEXT_MUTED, Classes.INTENT_DANGER].join(' ')}
      style={{ color: Colors.RED3, margin: 0, fontWeight: 400, ...props.style }}
    >
      {props.error}
    </div>
  ) : null;
