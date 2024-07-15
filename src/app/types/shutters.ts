export interface Shutter {
  state: string;
  source: string;
  power: number;
  is_valid: boolean;
  safety_switch: boolean;
  overtemperature: boolean;
  stop_reason: string;
  last_direction: string;
  current_pos: number;
  calibrating: boolean;
  positioning: boolean;
}
