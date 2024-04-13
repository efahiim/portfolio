import { Euler, Vector3 } from "three";

export interface IslandData {
  scale: Vector3 | undefined;
  position: Vector3 | undefined;
  rotation: Euler | undefined;
}

export interface PlaneData {
  scale: Vector3 | undefined;
  position: Vector3 | undefined;
  rotation: Euler | undefined;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}
