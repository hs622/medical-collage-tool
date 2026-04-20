
export function TypographyP() {
  return (
    <p className="leading-7 not-first:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
  )
}

export function TypographyD({ heading }: { heading: string }) {
  // not-first:mt-6
  return (
    <p className="text-sm">
      {heading}
    </p>
  )
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
      it&apos;s only fair that they should pay for the privilege.&quot;
    </blockquote>
  )
}
