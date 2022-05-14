import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
  ForbiddenException
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(ForbbidenFilter)
export class ForbbidenFilter implements ExceptionFilter {
  catch (exception: ForbiddenException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    return response.status(status).render('error.pug', {
      description: exception.message,
      status
    })
  }
}
