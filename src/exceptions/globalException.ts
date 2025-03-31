import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Default error response
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // Handle HTTP exceptions explicitly thrown
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    if (exception instanceof UnauthorizedException) {
      status = HttpStatus.UNAUTHORIZED;
      message = 'Unauthorized access';
    }

    // Handle TypeORM specific errors (like QueryFailedError)
    if (exception instanceof QueryFailedError) {
      // Handle duplicate key error (MySQL, PostgreSQL)
      if (exception.driverError.code === 'ER_DUP_ENTRY' || exception.driverError.code === '23505') {
        status = HttpStatus.CONFLICT;
        message = 'Duplicate entry: Resource already exists';
      } else {
        // For other QueryFailedError cases, log the message
        message = exception.driverError.message;
      }
    }

    if (exception instanceof BadRequestException) {
      status = HttpStatus.BAD_REQUEST;
      
      // Extracting error message from the BadRequestException
      const response = exception.getResponse();
      if (typeof response === 'object' && response.hasOwnProperty('message')) {
        message = (response as any).message;
      } else {
        message = exception.message || 'Bad request';
      }

      // Format the message in a user-friendly way
      message = Array.isArray(message) ? message.join(', ') : message;
    }


    // Catch any other unhandled errors
    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
