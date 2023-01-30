import React, { FunctionComponent as FC } from "react";
import "./styles/Button.styles.scss";

export const Button: FC<Props> = ({ variant = "default", ...props }) => {
	const { children, ...rest } = props;
	return (
		<button
			{...rest}
			className={variant !== "default" ? variant : undefined}>
			{children}
		</button>
	);
};

type Props = {
	variant?: "default" | "outline" | "text";
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
