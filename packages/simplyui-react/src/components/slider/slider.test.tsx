import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '.';

const SLIDER_MARKER_TEST_ID = 'slider-marker-test-id';

const SLIDER_ROOT_CONTENT = 'slider-root';
const SLIDER_TRACK_CONTENT = 'slider-track';
const SLIDER_RANGE_CONTENT = 'slider-range';
const SLIDER_MARKER_CONTENT = 'slider-marker';
const SLIDER_THUMB_CONTENT = 'slider-thumb';

describe('Slider', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(<Slider ref={ref}>{SLIDER_ROOT_CONTENT}</Slider>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Slider className={className}>{SLIDER_ROOT_CONTENT}</Slider>);
      expect(screen.getByText(SLIDER_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Track', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider>
          <Slider.Track ref={ref}>{SLIDER_TRACK_CONTENT}</Slider.Track>
        </Slider>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider>
          <Slider.Track className={className}>{SLIDER_TRACK_CONTENT}</Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_TRACK_CONTENT)).toHaveClass(className);
    });
  });

  describe('Range', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider>
          <Slider.Track>
            <Slider.Range ref={ref} />
          </Slider.Track>
        </Slider>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider>
          <Slider.Track>
            <Slider.Range className={className}>{SLIDER_RANGE_CONTENT}</Slider.Range>
          </Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_RANGE_CONTENT)).toHaveClass(className);
    });
  });

  describe('Marker', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider>
          <Slider.Track>
            <Slider.Marker value={0} ref={ref} />
          </Slider.Track>
        </Slider>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <Slider>
          <Slider.Track>
            <Slider.Marker value={0} data-testid={SLIDER_MARKER_TEST_ID}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider>
      );

      expect(screen.getByTestId(SLIDER_MARKER_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${SLIDER_MARKER_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Slider>
          <Slider.Track>
            <Slider.Marker asChild value={0} data-testid={SLIDER_MARKER_TEST_ID}>
              <p>{SLIDER_MARKER_CONTENT}</p>
            </Slider.Marker>
          </Slider.Track>
        </Slider>
      );

      expect(screen.getByTestId(SLIDER_MARKER_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${SLIDER_MARKER_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have role="presentation" attribute', () => {
      render(
        <Slider>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveAttribute('role', 'presentation');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Slider disabled={false}>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Slider disabled={true}>
          <Slider.Track>
            <Slider.Marker value={0}>{SLIDER_MARKER_CONTENT}</Slider.Marker>
          </Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have style handed over by style property', () => {
      render(
        <Slider>
          <Slider.Track>
            <Slider.Marker style={{ color: 'test' }} value={0}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider>
      );
      expect(screen.getByText(SLIDER_MARKER_CONTENT)).toHaveStyle({ color: 'test' });
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider>
          <Slider.Track>
            <Slider.Marker value={0} className={className}>
              {SLIDER_MARKER_CONTENT}
            </Slider.Marker>
          </Slider.Track>
        </Slider>
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
      const ref = createRef<HTMLSpanElement>();

      render(
        <Slider>
          <Slider.Thumb ref={ref} />
        </Slider>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Slider>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb className={className}>{SLIDER_THUMB_CONTENT}</Slider.Thumb>
        </Slider>
      );
      expect(screen.getByText(SLIDER_THUMB_CONTENT)).toHaveClass(className);
    });
  });
});
