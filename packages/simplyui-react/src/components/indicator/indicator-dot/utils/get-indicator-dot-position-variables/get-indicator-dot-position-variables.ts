import type { IndicatorDotPosition, IndicatorDotPositionVariables } from './get-indicator-dot-position-variables.types';

export function getIndicatorDotPositionVariables(_position: IndicatorDotPosition = 'top-end', offset = 0) {
  const indicatorDotPositionVariables: Record<IndicatorDotPositionVariables, string | undefined> = {
    '--indicator-dot-top': undefined,
    '--indicator-dot-bottom': undefined,
    '--indicator-dot-left': undefined,
    '--indicator-dot-right': undefined,
    '--indicator-dot-translate-x': undefined,
    '--indicator-dot-translate-y': undefined,
  };

  const _offset = `${offset / 16}rem`;
  const [position, placement] = _position.split('-');

  if (position === 'top') {
    indicatorDotPositionVariables['--indicator-dot-top'] = _offset;
    indicatorDotPositionVariables['--indicator-dot-translate-y'] = '-50%';
  }

  if (position === 'middle') {
    indicatorDotPositionVariables['--indicator-dot-top'] = '50%';
    indicatorDotPositionVariables['--indicator-dot-translate-y'] = '-50%';
  }

  if (position === 'bottom') {
    indicatorDotPositionVariables['--indicator-dot-bottom'] = _offset;
    indicatorDotPositionVariables['--indicator-dot-translate-y'] = '50%';
  }

  if (placement === 'start') {
    indicatorDotPositionVariables['--indicator-dot-left'] = _offset;
    indicatorDotPositionVariables['--indicator-dot-translate-x'] = '-50%';
  }

  if (placement === 'center') {
    indicatorDotPositionVariables['--indicator-dot-left'] = '50%';
    indicatorDotPositionVariables['--indicator-dot-translate-x'] = '-50%';
  }

  if (placement === 'end') {
    indicatorDotPositionVariables['--indicator-dot-right'] = _offset;
    indicatorDotPositionVariables['--indicator-dot-translate-x'] = '50%';
  }

  return indicatorDotPositionVariables;
}
