import { createLink, type LinkComponent } from '@tanstack/react-router'
import { type AnchorHTMLAttributes, forwardRef } from 'react'

const BasicLinkComponent = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => {
	return <a ref={ref} {...props} />
})

const CreateLinkComponent = createLink(BasicLinkComponent)

export const NavLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
	return <CreateLinkComponent {...props} />
}
