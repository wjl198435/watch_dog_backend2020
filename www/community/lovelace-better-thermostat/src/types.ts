import { ActionConfig } from "custom-card-helpers";

// TODO Add your configuration elements here for type-checking
export interface BetterThermostatConfig {
  entity: string;
  preset_climate_modes: PresetClimateMode[];

  // type: string;
  // name?: string;
  // show_warning?: boolean;
  // show_error?: boolean;
  // entity: string;
  // tap_aciton?: ActionConfig;
  // hold_action?: ActionConfig;
}

export interface PresetClimateMode {
  mode_id: string;
  mode_icon: string;
}
