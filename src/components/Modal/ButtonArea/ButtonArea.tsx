/** @jsxImportSource @emotion/react */

import { IButtonArea } from 'interface/modal.interface';
import React from 'react';
import { Wrapper } from './style';

export function ButtonArea({
	id,
	close,
	ok,
	closeTxt = '취소',
	okTxt = '확인',
}: IButtonArea) {
	return (
		<div css={Wrapper}>
			{id === 'confirm' && (
				<button className="btn_cancel" type="button" onClick={close}>
					{closeTxt}
				</button>
			)}
			<button className="btn_ok" type="button" onClick={ok}>
				{okTxt}
			</button>
		</div>
	);
}
