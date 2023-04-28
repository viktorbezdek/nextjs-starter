import type { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <main>{props.children}</main>
  </>
)

export { Main }
