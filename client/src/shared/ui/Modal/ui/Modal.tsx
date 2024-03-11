import React, { ReactNode, useState } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen = false, onClose } = props;

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	};

	const closeHandler = () => {
		if (onClose) {
			onClose();
		}
	};

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<div className={classNames(cls.modal, mods, [className])}>
			<div role='button' tabIndex={0} className={cls.overlay} onClick={closeHandler}>
				<div role='button' tabIndex={0} className={cls.content} onClick={onContentClick}>
					<button type='button' onClick={closeHandler}>
						X
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};
