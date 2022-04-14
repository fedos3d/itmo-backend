import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`User with id ${postId} not found`);
  }
}