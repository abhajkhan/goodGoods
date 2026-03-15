import React from 'react'

export default function ProductsPageLayout(
    {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center pt-4 my-4 ">
        {children}
    </div>
  )
}
