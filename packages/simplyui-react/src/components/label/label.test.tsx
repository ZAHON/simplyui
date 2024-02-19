import type { LabelProps } from './label.types';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './label';

const labelContent = 'Label';

function LabelTest(props: Omit<LabelProps, 'children'>) {
  return <Label {...props}>{labelContent}</Label>;
}

describe('Label', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLLabelElement>();

    render(<Label ref={ref}>{labelContent}</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<LabelTest disabled={false} />);
    expect(screen.getByText(labelContent)).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<LabelTest disabled={true} />);
    expect(screen.getByText(labelContent)).toHaveAttribute('data-disabled');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LabelTest className={className} />);
    expect(screen.getByText(labelContent)).toHaveClass(className);
  });
});
