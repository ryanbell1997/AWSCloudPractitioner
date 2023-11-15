import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Container({ children }: Props){
    return (
        <div style={{'border':"1px solid black"}}>
            {children}
        </div>
    )
}