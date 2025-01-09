import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { MatchSchema } from './schema/match.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }])],
  providers: [MatchesService],
  controllers: [MatchesController],
})
export class MatchesModule {}
