import React, {useContext} from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Wrapper} from './styles';
import Switch from 'react-switch';
import { shade } from 'polished';
import themeContext, { ThemeContext } from 'styled-components'


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme:() => void;
}

export function Header<Props>({ onOpenNewTransactionModal, toggleTheme }: HeaderProps) {
  const {colors, title} = useContext(ThemeContext)

  return (
    <Container>
      <Wrapper>
        <img src={ logoImg } alt="dt.money" />
        <Switch 
        className={'m'}
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={13}
        width={40}
        handleDiameter={20}
        onColor={colors.secundary}
        offColor={shade(0.5,colors.primary)}
        />

        
        <button 
          type="button"
          onClick={ onOpenNewTransactionModal }
        >
          Nova transação
        </button>
      </Wrapper>
    </Container>
  )
} 