import { type ComponentProps, forwardRef } from 'react'
import { PatternFormat, type PatternFormatProps } from 'react-number-format'

import { Input } from '../Input'

type MaskedInputProps = PatternFormatProps & ComponentProps<'input'>

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(({ ...props }, ref) => {
	return <PatternFormat customInput={Input} {...props} getInputRef={ref} />
})

MaskedInput.displayName = 'MaskedInput'
