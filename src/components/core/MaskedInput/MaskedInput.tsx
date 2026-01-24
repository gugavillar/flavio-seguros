import { forwardRef } from 'react'
import { PatternFormat, type PatternFormatProps } from 'react-number-format'

import { Input } from '../Input'

type MaskedInputProps = Omit<PatternFormatProps, 'customInput'> & {
	isInvalid?: boolean
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(({ ...props }, ref) => {
	return <PatternFormat customInput={Input} getInputRef={ref} {...props} />
})

MaskedInput.displayName = 'MaskedInput'
