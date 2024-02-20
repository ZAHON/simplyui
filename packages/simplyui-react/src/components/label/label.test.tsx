import type { LabelRootProps, LabelIndicatorProps } from '.';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Label } from '.';

describe('Label', () => {
  describe('LabelRoot', () => {
    const labelContent = 'Label';

    function LabelRootTest(props: Omit<LabelRootProps, 'children'>) {
      return <Label {...props}>{labelContent}</Label>;
    }

    it('should support ref', () => {
      const ref = createRef<HTMLLabelElement>();

      render(<Label ref={ref}>{labelContent}</Label>);
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });

    it('should be label element when asChild property not provided', () => {
      const { container } = render(<LabelRootTest />);

      expect(screen.getByText(labelContent)).toBeInstanceOf(HTMLLabelElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('label')).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Label asChild>
          <p>{labelContent}</p>
        </Label>
      );

      expect(screen.getByText(labelContent)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('label')).not.toBeInTheDocument();
    });

    it('should prevent text selection when double clicking', async () => {
      const user = userEvent.setup();
      render(<LabelRootTest />);

      const labelElement = screen.getByText(labelContent);
      await user.dblClick(labelElement);

      const clipboard = await user.copy();
      expect(clipboard).toBeUndefined();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<LabelRootTest disabled={false} />);
      expect(screen.getByText(labelContent)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<LabelRootTest disabled={true} />);
      expect(screen.getByText(labelContent)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LabelRootTest className={className} />);
      expect(screen.getByText(labelContent)).toHaveClass(className);
    });
  });

  describe('LabelIndicator', () => {
    const labelIndicatorContent = '[*]';

    function LabelIndicatorTest(props: Omit<LabelIndicatorProps, 'children'>) {
      return (
        <Label>
          Label
          <Label.Indicator {...props}>{labelIndicatorContent}</Label.Indicator>
        </Label>
      );
    }

    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Label>
          Label
          <Label.Indicator ref={ref}>{labelIndicatorContent}</Label.Indicator>
        </Label>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(<LabelIndicatorTest />);

      expect(screen.getByText(labelIndicatorContent)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('span')).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Label>
          Label
          <Label.Indicator asChild>
            <p>{labelIndicatorContent}</p>
          </Label.Indicator>
        </Label>
      );

      expect(screen.getByText(labelIndicatorContent)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('span')).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true"', () => {
      render(<LabelIndicatorTest />);
      expect(screen.getByText(labelIndicatorContent)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LabelIndicatorTest className={className} />);
      expect(screen.getByText(labelIndicatorContent)).toHaveClass(className);
    });
  });
});
