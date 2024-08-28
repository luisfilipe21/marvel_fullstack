import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Inputs = forwardRef(({ label, ...rest }: IInput, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div>
            <input {...rest} ref={ref} />
        </div>
    )
})