import { Injectable } from '@nestjs/common';
import BN from 'bn.js';
import { Map } from 'immutable';

import { TransferDirection } from '.';
import { TransferService } from './transfer.service';
import {
    AccountAssetDTO,
    AccountBalanceAssetService,
    AccountBalanceService
} from '../account-balance';

@Injectable()
export class TransferAccountingService extends AccountBalanceAssetService {
    constructor(
        private readonly transferService: TransferService,
        accountBalanceService: AccountBalanceService
    ) {
        super();
        accountBalanceService.registerAssetSource(this);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async lockedAssets(ownerId: string): Promise<Map<string, AccountAssetDTO>> {
        return Map<string, AccountAssetDTO>();
    }

    public async availableAssets(ownerId: string): Promise<Map<string, AccountAssetDTO>> {
        const transfers = await this.transferService.getAllCompleted(ownerId);

        return this.sumByAsset(
            transfers,
            (transfer) => transfer.asset,
            (transfer) => {
                let sign: number;

                switch (transfer.direction) {
                    case TransferDirection.Withdrawal:
                    case TransferDirection.Claim:
                    case TransferDirection.Send:
                        sign = -1;
                        break;

                    case TransferDirection.Deposit:
                        sign = 1;
                }

                return new BN(transfer.amount).mul(new BN(sign));
            }
        );
    }
}
