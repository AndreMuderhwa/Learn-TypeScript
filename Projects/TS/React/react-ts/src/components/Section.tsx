import  { ReactNode } from "react";

type propsSection={
    title?: string,
    children: ReactNode
}

export const Section=({children, title="My subHeading"}: propsSection)=>{
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}