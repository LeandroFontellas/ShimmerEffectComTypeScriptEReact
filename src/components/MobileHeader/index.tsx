import React from 'react';

import { Container,ProfileCircle,SearchInput,MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://avatars0.githubusercontent.com/u/50136672?s=400&u=427c95f498f37e8b6ca21315a4555628f617b663&v=4"/>
          <SearchInput placeholder="Pesquisar"/>
          <MessageIcon/>
      </Container>
  );
}

export default MobileHeader;