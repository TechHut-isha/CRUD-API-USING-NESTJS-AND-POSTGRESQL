import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { UserProfileModule } from './user_profile/user_profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: 'isha123',
    database: 'mydb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
    UserModule,
    ProfileModule,
    UserProfileModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}


