import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { RegistrationModule } from '../registration';
import { IrecModule, IrecService } from '../irec';
import { ConnectionController } from './connection.controller';
import { Connection } from './connection.entity';
import { ConnectionHandlers } from './handlers';

@Module({
    imports: [
        TypeOrmModule.forFeature([Connection]),
        ConfigModule,
        CqrsModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        RegistrationModule,
        IrecModule
    ],
    providers: [...ConnectionHandlers, IrecService],
    exports: [...ConnectionHandlers],
    controllers: [ConnectionController]
})
export class ConnectionModule {}
