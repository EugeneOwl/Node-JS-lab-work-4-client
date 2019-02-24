import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable()
export class SocketService {

  public socket = socketIo(environment.serverPort);

}
