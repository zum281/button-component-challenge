import React, { FunctionComponent as FC } from "react";
import "./styles/Button.styles.scss";

export const Button: FC<Props> = ({
	variant = "default",
	disableShadow = false,
	startIcon,
	endIcon,
	size = "md",
	...props
}) => {
	const { children, ...rest } = props;
	return (
		<button
			{...rest}
			className={`${variant !== "default" ? variant : undefined} ${
				disableShadow ? "disableShadow" : undefined
			} ${size}`}>
			{startIcon && (
				<span className='material-symbols-outlined'>{startIcon}</span>
			)}
			{children}
			{endIcon && (
				<span className='material-symbols-outlined'>{endIcon}</span>
			)}
		</button>
	);
};

type Props = {
	variant?: "default" | "outline" | "text";
	disableShadow?: boolean;
	startIcon?: string | null;
	endIcon?: string | null;
	size?: "sm" | "md" | "lg";
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
