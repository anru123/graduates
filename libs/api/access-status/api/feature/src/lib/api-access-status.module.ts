import { Module } from '@nestjs/common';
import { ApiAccessStatusResolver } from './api-access-status.resolver';
import { ApiAccessStatusService } from './api-access-status.service';

@Module({
  controllers: [],
  providers: [ApiAccessStatusResolver, ApiAccessStatusService],
  exports: [],
})
export class ApiAccessStatusApiFeatureModule {}
