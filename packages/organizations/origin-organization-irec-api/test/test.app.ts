/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser, Role, UserStatus } from '@energyweb/origin-backend-core';
import { DatabaseService } from '@energyweb/origin-backend-utils';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { useContainer } from 'class-validator';

import {
    AppModule,
    Connection,
    Beneficiary,
    Registration,
    RegistrationService,
    usedEntities
} from '../src';
import { OrganizationService, UserService } from '@energyweb/origin-backend';

export enum TestUser {
    OrganizationAdmin = '0',
    OtherOrganizationAdmin = '1',
    PlatformAdmin = '2'
}

export const testUsers = new Map([
    [
        TestUser.OrganizationAdmin,
        {
            id: 1,
            organization: { id: 1000 },
            status: UserStatus.Active,
            rights: Role.OrganizationAdmin
        } as IUser
    ],
    [
        TestUser.OtherOrganizationAdmin,
        {
            id: 2,
            organization: { id: 1001 },
            status: UserStatus.Active,
            rights: Role.OrganizationAdmin
        } as IUser
    ],
    [
        TestUser.PlatformAdmin,
        {
            id: 3,
            organization: { id: 1002 },
            status: UserStatus.Active,
            rights: Role.Admin
        } as IUser
    ]
]);

export const testOrganizations = [{ id: 1000 }, { id: 1001 }, { id: 1002 }];

const authGuard: CanActivate = {
    canActivate: (context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest();
        req.user = testUsers.get(req.headers['test-user']);
        return true;
    }
};

export const bootstrapTestInstance = async () => {
    const moduleFixture = await Test.createTestingModule({
        imports: [
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST ?? 'localhost',
                port: Number(process.env.DB_PORT) ?? 5432,
                username: process.env.DB_USERNAME ?? 'postgres',
                password: process.env.DB_PASSWORD ?? 'postgres',
                database: process.env.DB_DATABASE ?? 'origin',
                entities: [Connection, Beneficiary, Registration, ...usedEntities],
                logging: ['info']
            }),
            AppModule
        ],
        providers: [DatabaseService]
    })
        .overrideGuard(AuthGuard('default'))
        .useValue(authGuard)
        .overrideProvider(UserService)
        .useValue({
            getPlatformAdmin() {
                return testUsers.get(TestUser.PlatformAdmin);
            }
        })
        .overrideProvider(OrganizationService)
        .useValue({
            find() {
                return testOrganizations;
            },
            findOne(id: string | number) {
                return testOrganizations.find((org) => String(org.id) === String(id));
            }
        })
        .compile();

    const app = moduleFixture.createNestApplication();

    const registrationService = await app.resolve<RegistrationService>(RegistrationService);
    const databaseService = await app.resolve<DatabaseService>(DatabaseService);

    app.useLogger(['log', 'error']);
    app.enableCors();

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    return {
        registrationService,
        databaseService,
        app
    };
};
