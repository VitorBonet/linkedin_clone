import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationIcon, 
  ProfileCircle,
  CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active" >
              <HomeIcon />
              <span>Inicio</span>
            </button>
            <button >
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button >
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/37839079?s=460&u=3c865e8e4dd1ab6186bd140c0cdbbcc28a1ef073&v=4"/>
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;