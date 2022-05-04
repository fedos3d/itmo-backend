import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const token = req.cookies.auth_token;

    if (!token) {
      throw new ForbiddenException("The user is not authorized");
    } else {
      req.cookies.user = this.jwtService.verify(token);
      return true;
    }
  }
}
