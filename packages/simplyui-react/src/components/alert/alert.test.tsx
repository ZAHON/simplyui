import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Alert from '.';

const ALERT_ROOT_TEST_ID = 'alert-root-test-id';
const ALERT_ICON_TEST_ID = 'alert-icon-test-id';
const ALERT_BODY_TEST_ID = 'alert-body-test-id';
const ALERT_TITLE_TEST_ID = 'alert-title-test-id';
const ALERT_DESCRIPTION_TEST_ID = 'alert-description-test-id';

const ALERT_ROOT_CONTENT = 'alert-root';
const ALERT_ICON_CONTENT = 'alert-icon';
const ALERT_BODY_CONTENT = 'alert-body';
const ALERT_TITLE_CONTENT = 'alert-title';
const ALERT_DESCRIPTION_CONTENT = 'alert-description';

describe('Alert', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Alert.Root ref={ref}>{ALERT_ROOT_CONTENT}</Alert.Root>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(<Alert.Root data-testid={ALERT_ROOT_TEST_ID}>{ALERT_ROOT_CONTENT}</Alert.Root>);

      expect(screen.getByTestId(ALERT_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert.Root asChild data-testid={ALERT_ROOT_TEST_ID}>
          <span>{ALERT_ROOT_CONTENT}</span>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not accessible name when have aria-labelledby={undefined} attribute and not contains Alert.Title', () => {
      render(<Alert.Root aria-labelledby={undefined}>{ALERT_ROOT_CONTENT}</Alert.Root>);
      expect(screen.getByRole('alert')).not.toHaveAccessibleName();
    });

    it('should have accessible name when contains Alert.Title', () => {
      render(
        <Alert.Root>
          <Alert.Title>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );
      expect(screen.getByRole('alert')).toHaveAccessibleName();
    });

    it('should have not accessible description have aria-describedby={undefined} attribute and not contains Alert.Description', () => {
      render(<Alert.Root aria-describedby={undefined}>{ALERT_ROOT_CONTENT}</Alert.Root>);
      expect(screen.getByRole('alert')).not.toHaveAccessibleDescription();
    });

    it('should have accessible description when contains Alert.Description', () => {
      render(
        <Alert.Root>
          <Alert.Description>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );
      expect(screen.getByRole('alert')).toHaveAccessibleDescription();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Alert.Root className={className}>{ALERT_ROOT_CONTENT}</Alert.Root>);
      expect(screen.getByRole('alert')).toHaveClass(className);
    });
  });

  describe('Icon', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Alert.Root>
          <Alert.Icon ref={ref}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Icon data-testid={ALERT_ICON_TEST_ID}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_ICON_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ICON_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Icon asChild data-testid={ALERT_ICON_TEST_ID}>
            <span>{ALERT_ICON_CONTENT}</span>
          </Alert.Icon>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_ICON_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ICON_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true" attribute', () => {
      render(
        <Alert.Root>
          <Alert.Icon>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_ICON_CONTENT)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert.Root>
          <Alert.Icon className={className}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_ICON_CONTENT)).toHaveClass(className);
    });
  });

  describe('Body', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Alert.Root>
          <Alert.Body ref={ref}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Body data-testid={ALERT_BODY_TEST_ID}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_BODY_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_BODY_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Body asChild data-testid={ALERT_BODY_TEST_ID}>
            <span>{ALERT_ICON_CONTENT}</span>
          </Alert.Body>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_BODY_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_BODY_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert.Root>
          <Alert.Body className={className}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_BODY_CONTENT)).toHaveClass(className);
    });
  });

  describe('Title', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLParagraphElement>();

      render(
        <Alert.Root>
          <Alert.Title ref={ref}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Title data-testid={ALERT_TITLE_TEST_ID}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_TITLE_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_TITLE_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Title asChild data-testid={ALERT_TITLE_TEST_ID}>
            <span>{ALERT_TITLE_CONTENT}</span>
          </Alert.Title>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_TITLE_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_TITLE_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not "sr-only" class name when visuallyHidden property not provided', () => {
      render(
        <Alert.Root>
          <Alert.Title visuallyHidden={false}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_TITLE_CONTENT)).not.toHaveClass('sr-only');
    });

    it('should have "sr-only" class name when visuallyHidden property provided', () => {
      render(
        <Alert.Root>
          <Alert.Title visuallyHidden={true}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_TITLE_CONTENT)).toHaveClass('sr-only');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert.Root>
          <Alert.Title className={className}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_TITLE_CONTENT)).toHaveClass(className);
    });
  });

  describe('Description', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLParagraphElement>();

      render(
        <Alert.Root>
          <Alert.Description ref={ref}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Description data-testid={ALERT_DESCRIPTION_TEST_ID}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_DESCRIPTION_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_DESCRIPTION_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert.Root>
          <Alert.Description asChild data-testid={ALERT_DESCRIPTION_TEST_ID}>
            <span>{ALERT_DESCRIPTION_CONTENT}</span>
          </Alert.Description>
        </Alert.Root>
      );

      expect(screen.getByTestId(ALERT_DESCRIPTION_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_DESCRIPTION_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not "sr-only" class name when visuallyHidden property not provided', () => {
      render(
        <Alert.Root>
          <Alert.Description visuallyHidden={false}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_DESCRIPTION_CONTENT)).not.toHaveClass('sr-only');
    });

    it('should have "sr-only" class name when visuallyHidden property provided', () => {
      render(
        <Alert.Root>
          <Alert.Description visuallyHidden={true}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_DESCRIPTION_CONTENT)).toHaveClass('sr-only');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert.Root>
          <Alert.Description className={className}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert.Root>
      );
      expect(screen.getByText(ALERT_DESCRIPTION_CONTENT)).toHaveClass(className);
    });
  });
});
