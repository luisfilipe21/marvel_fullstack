import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Inputs = forwardRef(({ label, ...rest }: IInput, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <input {...rest} ref={ref} className="w-full rounded-md px-4 text-black py-1 font-marvel"/>
        </div>
    )
})