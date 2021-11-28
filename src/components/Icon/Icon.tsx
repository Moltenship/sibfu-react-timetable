import React, { FC, memo } from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
import { Icon as iconTheme } from '../../theme/components/Icon';

interface Props {

  /**
   * Name of icon in format provider:icon-name.
   */
  readonly name: string;

  /**
   * Style object.
   */
  readonly style?: React.CSSProperties;

  /**
   * Class name.
   */
  readonly className?: string;

  /**
   * Size in string format or pixels.
   */
  readonly size?: Size;
}

type Size = number | keyof typeof iconTheme.sizes;

/**
 * Map Size to number of pixels.
 */
function mapToPx(size: Size): number {
  if (typeof size === 'number') {
    return size;
  }
  if (size in iconTheme.sizes) {
    return iconTheme.sizes[size];
  }
  return iconTheme.sizes.md;
}

/**
 * Icon.
 */
export const Icon: FC<Props> = memo(({ name, style, className, size = 'md' }) => {
  const sizePx = mapToPx(size);

  const mappedProps = {
    style,
    className,
    icon: name,
    width: sizePx,
    height: sizePx,
  };

  return <IconifyIcon {...mappedProps} />;
});
