import { render } from '@testing-library/react';

import ReviewUiTitle from './review-ui-title';

describe('ReviewUiTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUiTitle />);
    expect(baseElement).toBeTruthy();
  });
});
