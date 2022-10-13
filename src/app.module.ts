import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HelloModule } from './hello/hello.module';
import { AuthModule } from './auth/auth.module';
import { IndexModule } from './index/index.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { Employees } from './employees/employees.entity';
import { Tts, TtsPIC, TtsChange } from './tts/tts.entity';
import { TtsModule } from './tts/tts.module';
import { Customer } from './customers/customers.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql' | 'mariadb' | 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
      entities: [Employees, Tts, Customer, TtsPIC, TtsChange],
      synchronize: true,
    }),
    HelloModule,
    AuthModule,
    IndexModule,
    CustomersModule,
    EmployeesModule,
    TtsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
