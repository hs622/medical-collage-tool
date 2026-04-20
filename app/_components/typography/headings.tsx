
export function TypographyH1({ heading }: { heading: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {heading}
    </h1>
  )
}

export function TypographyH2({ heading }: { heading: string }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {heading}
    </h2>
  )
}

export function TypographyH3({ heading }: { heading: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {heading}
    </h3>
  )
}

export function TypographyH4({ heading }: { heading: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {heading}
    </h4>
  )
}