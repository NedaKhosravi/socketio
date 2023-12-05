import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';

@Controller('alert')
export class AlertController {
  constructor(private alertGateWay: AlertGateway) {}

  @Post()
  @HttpCode(201)
  sendAlertToAll(@Body() dto: { message: string }) {
    this.alertGateWay.sendToAll(dto.message);
    return dto;
  }
}
