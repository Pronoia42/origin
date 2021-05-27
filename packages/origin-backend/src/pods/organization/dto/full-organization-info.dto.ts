import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { IsArray, IsISO31661Alpha2, IsOptional, IsString } from 'class-validator';
import { Organization } from '../organization.entity';
import { PublicOrganizationInfoDTO } from './public-organization-info.dto';

export class FullOrganizationInfoDTO extends PublicOrganizationInfoDTO {
    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryFullName: string;

    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryAddress: string;

    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryZipCode: string;

    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryCity: string;

    @ApiProperty({ type: String })
    @IsISO31661Alpha2()
    @Expose()
    signatoryCountry: string;

    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryEmail: string;

    @ApiProperty({ type: String })
    @IsString()
    @Expose()
    signatoryPhoneNumber: string;

    @ApiPropertyOptional({ type: [String] })
    @IsArray()
    @Expose()
    documentIds?: string[];

    @ApiPropertyOptional({ type: [String] })
    @IsArray()
    @Expose()
    signatoryDocumentIds?: string[];

    @ApiPropertyOptional({ type: String })
    @IsString()
    @IsOptional()
    blockchainAccountAddress?: string;

    @ApiPropertyOptional({ type: String })
    @IsString()
    @IsOptional()
    blockchainAccountSignedMessage?: string;

    public static fromPlatformOrganization(
        platformOrganization: Organization
    ): FullOrganizationInfoDTO {
        return plainToClass(FullOrganizationInfoDTO, platformOrganization, {
            excludeExtraneousValues: true
        });
    }
}
