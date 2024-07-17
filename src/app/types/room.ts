import { Light } from './light';
import { Shutter } from './shutters';

export interface RoomStats {
  light: Light;
  shutters: Shutter;
}
