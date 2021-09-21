import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import testCommonLink from '../test-utils';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Nav', () => {
  it('Renders the github link', () => {
    render(<Nav />);

    const github = screen.getByTitle('Developer DAO GitHub repository');

    testCommonLink(github, 'https://github.com/Developer-DAO/developer-dao');
  });

  it('Renders the developer_dao link to homepage', () => {
    render(<Nav />);

    const developerDao = screen.getByRole('link', {
      name: 'title',
    });

    testCommonLink(developerDao, '/');
  });
});
