'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletButton() {
    return (
        <div className="wallet-button-wrapper">
            <ConnectButton
                chainStatus="icon"
                showBalance={false}
            />
        </div>
    );
}
