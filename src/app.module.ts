import { Module } from '@nestjs/common';
import { CompaniesController } from './modules/companies/companies.controller';

@Module({
  controllers: [CompaniesController],
})
export class ApplicationModule {}
