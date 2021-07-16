import { Module } from '@nestjs/common';
import { DepositWatcherModule } from './deposit-watcher';
import { WithdrawalProcessorModule, WithdrawalRequestedEventHandler } from './withdrawal-processor';
import { ClaimRequestedEventHandler } from './withdrawal-processor/claim-requested-event.handler';
import { SendRequestedEventHandler } from './withdrawal-processor/send-requested-event.handler';

@Module({
    providers: [
        WithdrawalRequestedEventHandler,
        ClaimRequestedEventHandler,
        SendRequestedEventHandler
    ],
    imports: [DepositWatcherModule, WithdrawalProcessorModule]
})
export class ExchangeErc1888Module {}
