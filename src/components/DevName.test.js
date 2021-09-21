import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DevName from './DevName';
import { OPENSEA_DIRECT_LINK_PREFIX } from '../utils/DeveloperDaoConstants';
import testCommonLink from '../test-utils';
import { ownedDeveloperNFT, unownedDeveloperNFT } from '../test-data';

describe('Dev Name button with Owner', () => {
  it('Renders the button with link', () => {
    render(<DevName nft={ownedDeveloperNFT} developerId={'2669'} />);
    const devName = screen.getByTitle(`${ownedDeveloperNFT.owner}`);

    fireEvent.click(devName);

    testCommonLink(devName, `${OPENSEA_DIRECT_LINK_PREFIX}/2669`);
    expect(devName).toBeEnabled();
  });
});

describe('Dev Name button without Owner', () => {
  it('Renders the button with no link', () => {
    render(<DevName nft={unownedDeveloperNFT} developerId={'7899'} />);

    const devName = screen.getByTitle(`${unownedDeveloperNFT.owner}`);

    expect(devName).toBeInTheDocument();
    expect(devName).toBeDisabled();
  });
});
