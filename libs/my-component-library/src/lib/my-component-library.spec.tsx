import { render } from '@testing-library/react';

import MyComponentLibrary from './my-component-library';

describe('MyComponentLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
