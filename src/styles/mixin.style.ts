import { css } from '@emotion/react';

// layout
export const _position = (
	$position = 'relative',
	$t = '',
	$r = '',
	$b = '',
	$l = ''
) => css`
	position: ${$position};
	top: ${$t};
	right: ${$r};
	bottom: ${$b};
	left: ${$l};
`;
export const _flexbox = ($js = 'center', $ai = 'center') => css`
	display: flex;
	justify-content: ${$js};
	align-items: ${$ai};
`;

export const _flexDirection = ($dir = '') => css`
	display: flex;
	flex-direction: ${$dir};
`;

export const _size = ($width = '', $height = $width) => css`
	width: ${$width};
	height: ${$height};
`;

export const _inlineblock = ($verticalAlign = 'top') => css`
	display: inline-block;
	vertical-align: ${$verticalAlign};
`;

export const _ellipsis = css`
	overflow: hidden;
	white-space: nowrap;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
`;
