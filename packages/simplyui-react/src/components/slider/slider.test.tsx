import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Slider from '.';

const SLIDER_MARKER_TEST_ID = 'slider-marker-test-id';
const SLIDER_THUMB_TEST_ID = 'slider-thumb-test-id';

const SLIDER_ROOT_CONTENT = 'slider-root';
const SLIDER_TRACK_CONTENT = 'slider-track';
const SLIDER_RANGE_CONTENT = 'slider-range';
const SLIDER_MARKER_CONTENT = 'slider-marker';
const SLIDER_THUMB_CONTENT = 'slider-thumb';

describe('Slider', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(<Slider.Root ref={ref}>{SLIDER_ROOT_CONTENT}</Slider.Root>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Slider.Root className={className}>{SLIDER_ROOT_CONTENT}</Slider.Root>);
      expect(screen.getByText(SLIDER_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Track', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider.Root>
          <Slider.Track ref={ref}>{SLIDER_TRACK_CONTENT}</Slider.Track>
        </Slider.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider.Root>
          <Slider.Track className={className}>{SLIDER_TRACK_CONTENT}</Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_TRACK_CONTENT)).toHaveClass(className);
    });
  });

  describe('Range', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Range ref={ref} />
          </Slider.Track>
        </Slider.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Range className={className}>{SLIDER_RANGE_CONTENT}</Slider.Range>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_RANGE_CONTENT)).toHaveClass(className);
    });
  });

  describe('Marker', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker value={0} ref={ref} />
          </Slider.Track>
        </Slider.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker value={0} data-testid={SLIDER_MARKER_TEST_ID}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );

      expect(screen.getByTestId(SLIDER_MARKER_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${SLIDER_MARKER_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker asChild value={0} data-testid={SLIDER_MARKER_TEST_ID}>
              <p>{SLIDER_MARKER_CONTENT}</p>
            </Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );

      expect(screen.getByTestId(SLIDER_MARKER_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${SLIDER_MARKER_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have role="presentation" attribute', () => {
      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveAttribute('role', 'presentation');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Slider.Root disabled={false}>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Slider.Root disabled={true}>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have style handed over by style property', () => {
      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker style={{ color: 'test' }} value={0}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveStyle({ color: 'test' });
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Marker value={0} className={className}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveClass(className);
    });
  });

  describe('Thumb', () => {
    // Mock ResizeObserver
    global.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Slider.Root>
          <Slider.Thumb ref={ref} />
        </Slider.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(
        <Slider.Root>
          <Slider.Thumb data-testid={SLIDER_THUMB_TEST_ID} />
        </Slider.Root>
      );

      expect(screen.getByTestId(SLIDER_THUMB_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${SLIDER_THUMB_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Slider.Root>
          <Slider.Thumb asChild data-testid={SLIDER_THUMB_TEST_ID}>
            <div>{SLIDER_THUMB_CONTENT}</div>
          </Slider.Thumb>
        </Slider.Root>
      );

      expect(screen.getByTestId(SLIDER_THUMB_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${SLIDER_THUMB_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider.Root>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb className={className}>{SLIDER_THUMB_CONTENT}</Slider.Thumb>
        </Slider.Root>
      );
      expect(screen.getByText(SLIDER_THUMB_CONTENT)).toHaveClass(className);
    });
  });
});
