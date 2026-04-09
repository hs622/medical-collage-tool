import { ThemeProvider } from "next-themes"


export default function AppProvider({ children, ...props }: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  )
}