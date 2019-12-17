import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus, allowedStatuses } from '../task.model';

export class StatusValidationPipe implements PipeTransform {
  private isStatusValid(status: any) {
    return -1 !== allowedStatuses.indexOf(status);
  }
  transform(value: string) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }
    return value;
  }
}
