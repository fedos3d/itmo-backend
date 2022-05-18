import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    return response.status(status).render("error.pug", {
      description: exception.message,
      status,
      ref: request.get("Referrer"),
    });
  }
}
