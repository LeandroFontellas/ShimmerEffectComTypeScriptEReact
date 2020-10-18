import React from 'react';

import { Container, Wrapper, LinkedInIcon, SearchInput, HomeIcon, NotificationIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
  <Container>
      <Wrapper>
          <div className="left">
              <LinkedInIcon/>
              <SearchInput placeholder="Pesquisar"/>
          </div>
          <div className="right">
              <nav>
                  <button className="active">
                      <HomeIcon/>
                      <span>Inicio</span>
                  </button>
                  <button>
                      <NotificationIcon/>
                      <span>Notificações</span>
                  </button>
                  <button>
                      <ProfileCircle src="https://avatars0.githubusercontent.com/u/50136672?s=400&u=427c95f498f37e8b6ca21315a4555628f617b663&v=4"/>
                      <span>Eu <CaretDownIcon/></span>
                  </button>
              </nav>
          </div>
      </Wrapper>
  </Container>
  );
}

export default DesktopHeader;