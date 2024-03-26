import type { Measurable } from '../../utils/observe-element-rect';
import { useState } from 'react';
import { useLayoutEffect } from '../use-layout-effect';
import { observeElementRect } from '../../utils/observe-element-rect';

/**
 * Use this custom hook to get access to an element's rect (getBoundingClientRect)
 * and observe it along time.
 */
export function useRect(measurable: Measurable | null) {
  const [rect, setRect] = useState<ClientRect>();

  useLayoutEffect(() => {
    if (measurable) {
      const unobserve = observeElementRect(measurable, setRect);
      return () => {
        setRect(undefined);
        unobserve();
      };
    }
    return;
  }, [measurable]);

  return rect;
}
