import * as S from './Main.styles'
import { MainProps } from './Main.utils'

const Main = ({ backgroundColor, textColor, children }: MainProps) => (
  <S.Wrapper backgroundColor={backgroundColor} textColor={textColor}>
    {children}
  </S.Wrapper>
)

export default Main
