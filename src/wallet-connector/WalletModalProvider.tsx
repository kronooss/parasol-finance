import React, {FC, useState} from 'react';
import {WalletModalContext} from './useWalletModal';
import {WalletModal} from './WalletModal';

export const WalletModalProvider: FC = ({children}) => {
	const [visible, setVisible] = useState(false);

	return <WalletModalContext.Provider
		value={{
			visible,
			setVisible,
		}}
	>
		{children}
		<WalletModal />
	</WalletModalContext.Provider>
};
