type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="bg-gray-200">{children}</main>
    </>
  )
}
