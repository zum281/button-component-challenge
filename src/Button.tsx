import React, { FunctionComponent as FC } from "react";
import "./styles/Button.styles.scss";

export const Button: FC<Props> = ({
	variant = "default",
	disableShadow = false,
	...props
}) => {
	const { children, ...rest } = props;
	return (
		<button
			{...rest}
			className={`${variant !== "default" ? variant : undefined} ${
				disableShadow ? "disableShadow" : undefined
			}`}>
			{children}
		</button>
	);
};

type Props = {
	variant?: "default" | "outline" | "text";
	disableShadow?: boolean;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
