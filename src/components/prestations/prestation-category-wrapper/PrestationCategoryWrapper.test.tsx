import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrestationCategoryWrapper } from './PrestationCategoryWrapper';

describe('<PrestationCategoryWrapper>', () => {
  it('Display prestation category title correctly', () => {
    render(<PrestationCategoryWrapper title="haircut" />);
    expect(screen.getByText('haircut')).toBeInTheDocument();
  });

  it('Display childrens below prestation category title', () => {
    render(
      <PrestationCategoryWrapper title="haircut">
        <p>childrens</p>
      </PrestationCategoryWrapper>
    );
    expect(screen.getByText('childrens')).toBeInTheDocument();
  });
});
