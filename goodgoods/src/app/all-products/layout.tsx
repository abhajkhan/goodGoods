import React from 'react'

export default function ProductsPageLayout(
    {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-center my-4 ">
        {children}
    </div>
  )
}
