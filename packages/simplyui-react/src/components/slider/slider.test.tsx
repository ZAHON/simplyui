import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '.';

const SLIDER_ROOT_CONTENT = 'slider-root';
const SLIDER_TRACK_CONTENT = 'slider-track';
const SLIDER_RANGE_CONTENT = 'slider-range';
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
