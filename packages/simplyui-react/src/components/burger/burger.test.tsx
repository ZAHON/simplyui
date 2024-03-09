import { createRef, useState } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Burger } from '.';

const BURGER_ROOT_TEST_ID = 'burger-root-test-id';
const BURGER_ICON_TEST_ID = 'burger-icon-test-id';

const BURGER_ROOT_CONTENT = 'burger-root-content';

describe('Burger', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Burger ref={ref}>{BURGER_ROOT_CONTENT}</Burger>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(
        <Burger data-testid={BURGER_ROOT_TEST_ID}>
          <Burger.Icon />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ROOT_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${BURGER_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Burger asChild data-testid={BURGER_ROOT_TEST_ID}>
          <div>
            <Burger.Icon />
          </div>
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${BURGER_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<Burger disabled={false}>{BURGER_ROOT_CONTENT}</Burger>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<Burger disabled={true}>{BURGER_ROOT_CONTENT}</Burger>);
      expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Burger className={className}>{BURGER_ROOT_CONTENT}</Burger>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });

    describe('Uncontrolled state', () => {
      it('should have data-state="closed" attribute when defaultOpen property not provided', () => {
        render(<Burger defaultOpen={false}>{BURGER_ROOT_CONTENT}</Burger>);
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'closed');
      });

      it('should have data-state="open" attribute when defaultOpen property provided', () => {
        render(<Burger defaultOpen={true}>{BURGER_ROOT_CONTENT}</Burger>);
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'open');
      });

      it('should have not data-state="open" attribute when defaultOpen and disabled properties provided', async () => {
        const user = userEvent.setup();
        render(
          <Burger disabled={true} defaultOpen={false}>
            {BURGER_ROOT_CONTENT}
          </Burger>
        );
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'closed');

        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'closed');
      });
    });

    describe('Controlled state', () => {
      it('should have data-state attribute with appropriate value when user click the burger', async () => {
        const user = userEvent.setup();

        function Component() {
          const [open, setOpen] = useState(false);

          return (
            <Burger open={open} onOpenChange={setOpen}>
              {BURGER_ROOT_CONTENT}
            </Burger>
          );
        }

        render(<Component />);
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'closed');

        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'open');

        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('data-state', 'closed');
      });
    });
  });

  describe('Icon', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Burger>
          <Burger.Icon ref={ref} />
        </Burger>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Burger>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${BURGER_ICON_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Burger>
          <Burger.Icon asChild data-testid={BURGER_ICON_TEST_ID}>
            <span></span>
          </Burger.Icon>
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${BURGER_ICON_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not aria-hidden="true" attribute', () => {
      render(
        <Burger>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Burger disabled={false}>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Burger disabled={true}>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have data-state="closed" attribute when defaultOpen property not provided on Root element', () => {
      render(
        <Burger defaultOpen={false}>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toHaveAttribute('data-state', 'closed');
    });

    it('should have data-state="open" attribute when defaultOpen property provided on Root element', () => {
      render(
        <Burger defaultOpen={true}>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} />
        </Burger>
      );

      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toHaveAttribute('data-state', 'open');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Burger>
          <Burger.Icon data-testid={BURGER_ICON_TEST_ID} className={className} />
        </Burger>
      );
      expect(screen.getByTestId(BURGER_ICON_TEST_ID)).toHaveClass(className);
    });
  });
});
