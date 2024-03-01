'use client';
import type { SegmentedControlItemProps } from './segmented-control-item.types';
import type { ChangeEvent } from 'react';
import type { SegmentedControlItemContextValue } from '../segmented-control-item-context';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSegmentedControlContext } from '../segmented-control-context';
import { SegmentedControlItemContextProvider } from '../segmented-control-item-context';
import { segmentedControlItemStyles } from './segmented-control-item.styles';

export const SegmentedControlItem = forwardRef<HTMLDivElement, SegmentedControlItemProps>((props, ref) => {
  const { disabled, required, value, className, children, ...others } = props;

  const id = useId();
  const context = useSegmentedControlContext();

  const itemId = `segmented-control-item-${id}`;
  const isDisabled = context.disabled || disabled;
  const isChecked = value === context.value;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    context.handleValueChange(e.target.value);
  }

  const segmentedControlItemContextValue: SegmentedControlItemContextValue = {
    checked: isChecked,
    disabled: isDisabled,
    id: itemId,
  };

  return (
    <SegmentedControlItemContextProvider value={segmentedControlItemContextValue}>
      <div
        ref={ref}
        data-disabled={isDisabled ? '' : undefined}
        data-state={isChecked ? 'checked' : 'unchecked'}
        className={twMerge(segmentedControlItemStyles(), className)}
        {...others}
      >
        <input
          type="radio"
          id={itemId}
          name={context.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          aria-required={required ? true : undefined}
          onChange={handleChange}
          className="peer sr-only"
        />
        {children}
      </div>
    </SegmentedControlItemContextProvider>
  );
});

SegmentedControlItem.displayName = 'SegmentedControlItem';
