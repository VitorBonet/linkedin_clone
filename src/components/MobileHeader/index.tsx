import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcn } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars1.githubusercontent.com/u/37839079?s=460&u=3c865e8e4dd1ab6186bd140c0cdbbcc28a1ef073&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcn />
    </Container>
  );
}

export default MobileHeader;