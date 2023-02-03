import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

import "./stories.scss";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const DefaultOutline = Template.bind({});
export const DefaultText = Template.bind({});
export const PrimaryDefault = Template.bind({});
export const PrimaryOutline = Template.bind({});
export const PrimaryText = Template.bind({});
export const SecondaryDefault = Template.bind({});
export const SecondaryOutline = Template.bind({});
export const SecondaryText = Template.bind({});
export const DangerDefault = Template.bind({});
export const DangerOutline = Template.bind({});
export const DangerText = Template.bind({});
export const DisableShadow = Template.bind({});
export const DisabledDefault = Template.bind({});
export const DisabledOutline = Template.bind({});
export const DisabledText = Template.bind({});
export const StartIcon = Template.bind({});
export const EndIcon = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Default.args = {
	children: "Default",
};

DefaultOutline.args = {
	variant: "outline",
	children: "Outline",
};

DefaultText.args = {
	variant: "text",
	children: "Text",
};
PrimaryDefault.args = {
	color: "primary",
	children: "Primary",
};
PrimaryOutline.args = {
	color: "primary",
	variant: "outline",
	children: "Outline",
};
PrimaryText.args = {
	color: "primary",
	variant: "text",
	children: "Text",
};
SecondaryDefault.args = {
	color: "secondary",
	children: "Secondary",
};
SecondaryOutline.args = {
	color: "secondary",
	variant: "outline",
	children: "Outline",
};
SecondaryText.args = {
	color: "secondary",
	variant: "text",
	children: "Text",
};
DangerDefault.args = {
	color: "danger",
	children: "Secondary",
};
DangerOutline.args = {
	color: "danger",
	variant: "outline",
	children: "Outline",
};
DangerText.args = {
	color: "danger",
	variant: "text",
	children: "Text",
};

DisableShadow.args = {
	color: "primary",
	children: "Default",
	disableShadow: true,
};

DisabledDefault.args = {
	children: "Default",
	disabled: true,
	color: "primary",
};

DisabledOutline.args = {
	variant: "outline",
	children: "Outline",
	disabled: true,
	color: "primary",
};

DisabledText.args = {
	children: "Text",
	variant: "text",
	disabled: true,
	color: "primary",
};

StartIcon.args = {
	startIcon: "commit",
	color: "primary",
	children: "StartIcon",
};
EndIcon.args = {
	endIcon: "commit",
	color: "primary",
	children: "EndIcon",
};
Small.args = {
	color: "primary",
	children: "Small",
	size: "sm",
};
Medium.args = {
	color: "primary",
	children: "Medium",
	size: "md",
};
Large.args = {
	color: "primary",
	children: "Large",
	size: "lg",
};
