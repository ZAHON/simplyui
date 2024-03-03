import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '.';

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

      render(<Alert ref={ref}>{ALERT_ROOT_CONTENT}</Alert>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(<Alert data-testid={ALERT_ROOT_TEST_ID}>{ALERT_ROOT_CONTENT}</Alert>);

      expect(screen.getByTestId(ALERT_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert asChild data-testid={ALERT_ROOT_TEST_ID}>
          <span>{ALERT_ROOT_CONTENT}</span>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not accessible name when not contains Alert.Title', () => {
      render(<Alert>{ALERT_ROOT_CONTENT}</Alert>);
      expect(screen.getByRole('alert')).not.toHaveAccessibleName();
    });

    it('should have accessible name when contains Alert.Title', () => {
      render(
        <Alert>
          <Alert.Title>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert>
      );
      expect(screen.getByRole('alert')).toHaveAccessibleName();
    });

    it('should have not accessible description when not contains Alert.Description', () => {
      render(<Alert>{ALERT_ROOT_CONTENT}</Alert>);
      expect(screen.getByRole('alert')).not.toHaveAccessibleDescription();
    });

    it('should have accessible description when contains Alert.Description', () => {
      render(
        <Alert>
          <Alert.Description>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert>
      );
      expect(screen.getByRole('alert')).toHaveAccessibleDescription();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Alert className={className}>{ALERT_ROOT_CONTENT}</Alert>);
      expect(screen.getByRole('alert')).toHaveClass(className);
    });
  });

  describe('Icon', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Alert>
          <Alert.Icon ref={ref}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Icon data-testid={ALERT_ICON_TEST_ID}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_ICON_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ICON_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Icon asChild data-testid={ALERT_ICON_TEST_ID}>
            <span>{ALERT_ICON_CONTENT}</span>
          </Alert.Icon>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_ICON_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_ICON_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert>
          <Alert.Icon className={className}>{ALERT_ICON_CONTENT}</Alert.Icon>
        </Alert>
      );
      expect(screen.getByText(ALERT_ICON_CONTENT)).toHaveClass(className);
    });
  });

  describe('Body', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Alert>
          <Alert.Body ref={ref}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Body data-testid={ALERT_BODY_TEST_ID}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_BODY_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_BODY_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Body asChild data-testid={ALERT_BODY_TEST_ID}>
            <span>{ALERT_ICON_CONTENT}</span>
          </Alert.Body>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_BODY_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${ALERT_BODY_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert>
          <Alert.Body className={className}>{ALERT_BODY_CONTENT}</Alert.Body>
        </Alert>
      );
      expect(screen.getByText(ALERT_BODY_CONTENT)).toHaveClass(className);
    });
  });

  describe('Title', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLParagraphElement>();

      render(
        <Alert>
          <Alert.Title ref={ref}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert>
      );
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Title data-testid={ALERT_TITLE_TEST_ID}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_TITLE_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_TITLE_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Title asChild data-testid={ALERT_TITLE_TEST_ID}>
            <span>{ALERT_TITLE_CONTENT}</span>
          </Alert.Title>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_TITLE_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_TITLE_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert>
          <Alert.Title className={className}>{ALERT_TITLE_CONTENT}</Alert.Title>
        </Alert>
      );
      expect(screen.getByText(ALERT_TITLE_CONTENT)).toHaveClass(className);
    });
  });

  describe('Description', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLParagraphElement>();

      render(
        <Alert>
          <Alert.Description ref={ref}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert>
      );
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Description data-testid={ALERT_DESCRIPTION_TEST_ID}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_DESCRIPTION_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_DESCRIPTION_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Alert>
          <Alert.Description asChild data-testid={ALERT_DESCRIPTION_TEST_ID}>
            <span>{ALERT_DESCRIPTION_CONTENT}</span>
          </Alert.Description>
        </Alert>
      );

      expect(screen.getByTestId(ALERT_DESCRIPTION_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${ALERT_DESCRIPTION_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Alert>
          <Alert.Description className={className}>{ALERT_DESCRIPTION_CONTENT}</Alert.Description>
        </Alert>
      );
      expect(screen.getByText(ALERT_DESCRIPTION_CONTENT)).toHaveClass(className);
    });
  });
});
