import { LovelaceCardConfig } from "custom-card-helpers";
import { ComboEntity } from "./type.js";

export interface PowerFlowCardConfig extends LovelaceCardConfig {
  entities: {
    battery?: string | ComboEntity;
    battery_charge?: string;
    grid: string | ComboEntity;
    grid_daily?: string 
    solar?: string;
    solar_daily_produced?: string
    solar_daily_eigenverbrauch?: string
    solar_daily_einspeisung?: string
    home_daily?: string
    gas?: string;
    water?: string;
  };
  dashboard_link?: string;
  inverted_entities: string | string[];
  kw_decimals: number;
  min_flow_rate: number;
  max_flow_rate: number;
  w_decimals: number;
  watt_threshold: number;
  gas_text?: string;
  gas_icon?: string;
}

