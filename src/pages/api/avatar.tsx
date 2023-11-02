/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';
import { emojiUnicode } from '../../lib/emoji-unicode';
import { randomColor } from '../../lib/random-color';
import { isValidNumber } from '../../lib/is-valid-number';
import { clampNumber } from '../../lib/clamp-number';
import Head from 'next/head';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // STYLE
  const style: CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0ebff',
    borderRadius: '0%',
  };

  // DIMENSIONS
  const dimensions = {
    width: 64,
    height: 64,
  };

  // 'background=?'
  const background = searchParams.get('background');

  if (background) {
    if (background === 'random') {
      style.backgroundColor = randomColor();
    } else if (/^[0-9A-F]{6}$/i.test(background)) {
      style.backgroundColor = `#${background}`;
    }
  }

  // 'rounded=?'
  const rounded = searchParams.get('rounded');

  if (rounded) {
    if (rounded === 'true') {
      style.borderRadius = '50%';
    } else {
      style.borderRadius = rounded;
    }
  }

  // 'size=?'
  const size = searchParams.get('size');

  if (size) {
    if (isValidNumber(+size)) {
      const clamped = clampNumber(+size, 32, 256);
      dimensions.height = clamped;
      dimensions.width = clamped;
    }
  }

  // 'emoji=?'
  const emoji = searchParams.get('emoji');
  const unicode = emojiUnicode(emoji!).replaceAll('_fe0f', '');

  return new ImageResponse(
    (
      <div style={style}>
        <img
          width={0.5 * dimensions.width}
          height={0.5 * dimensions.height}
          src={`https://raw.githubusercontent.com/samuelngs/apple-emoji-linux/ios-16.4/png/160/emoji_u${unicode}.png`}
        />
      </div>
    ),

    {
      ...dimensions,
    }
  );
}
